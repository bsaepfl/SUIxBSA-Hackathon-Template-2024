import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClient,
  useSuiClientQuery,
} from "@mysten/dapp-kit";
import type { SuiObjectData } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { useNetworkVariable } from "../../networkConfig";

export function Counter({ id }: { id: string }) {
  const counterPackageId = useNetworkVariable("counterPackageId");
  const suiClient = useSuiClient();
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction({
    execute: async ({ bytes, signature }) =>
      await suiClient.executeTransactionBlock({
        transactionBlock: bytes,
        signature,
        options: {
          // Raw effects are required so the effects can be reported back to the wallet
          showRawEffects: true,
          showEffects: true,
        },
      }),
  });
  const { data, isPending, error, refetch } = useSuiClientQuery("getObject", {
    id,
    options: {
      showContent: true,
      showOwner: true,
    },
  });

  const executeMoveCall = (method: "increment" | "reset") => {
    const tx = new Transaction();

    if (method === "reset") {
      tx.moveCall({
        arguments: [tx.object(id), tx.pure.u64(0)],
        target: `${counterPackageId}::counter::set_value`,
 });
    } else {
      tx.moveCall({
        arguments: [tx.object(id)],
        target: `${counterPackageId}::counter::increment`,
      });
    }

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: async () => {
          await refetch();
        },
      },
    );
  };

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (!data.data) return <p>Not found</p>;

  const ownedByCurrentAccount =
    getCounterFields(data.data)?.owner === currentAccount?.address;

  return (
    <div className="max-w-md mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb4">Counter {id}</h1>

      <div className="flex flex-col gap-2">
        <p>Count: {getCounterFields(data.data)?.value}</p>
        <div className="flex flex-row gap-2">
          <button
            className="btn btn-primary"
            onClick={() => executeMoveCall("increment")}
          >
            Increment
          </button>
          {ownedByCurrentAccount ? (
            <button
              className="btn btn-secondary"
              onClick={() => executeMoveCall("reset")}
            >
              Reset
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function getCounterFields(data: SuiObjectData) {
  if (data.content?.dataType !== "moveObject") {
    return null;
  }

 return data.content.fields as { value: number; owner: string };
}
