import { Transaction } from "@mysten/sui/transactions";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { useNetworkVariable } from "../../networkConfig";

export function CreateCounter({
  onCreated,
}: {
  onCreated: (id: string) => void;
}) {
  const counterPackageId = useNetworkVariable("counterPackageId");
  const suiClient = useSuiClient();
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

  return (
    <div className="max-w-md mx-auto p-4 mt-20">
      <button
        className="btn btn-primary"
        onClick={() => {
          create();
        }}
      >
        Create Counter
      </button>
    </div>
  );

  function create() {
    const tx = new Transaction();

    tx.moveCall({
      arguments: [],
      target: `${counterPackageId}::counter::create`,
    });

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: (result) => {
          const objectId = result.effects?.created?.[0]?.reference?.objectId;
          if (objectId) {
            onCreated(objectId);
          }
        },
      },
    );
  }
}
