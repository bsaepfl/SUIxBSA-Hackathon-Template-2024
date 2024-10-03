import React, { useState } from 'react';
import { useSuiClient } from '@mysten/dapp-kit';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { useResolveSuiNSName } from '@mysten/dapp-kit';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { ConnectModal } from '@mysten/dapp-kit';

const DebugComponent = () => {
  const [packageId, setPackageId] = useState('');
  const [moduleId, setModuleId] = useState('');
  const [functionId, setFunctionId] = useState('');
  const [args, setArgs] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const currentAccount = useCurrentAccount();
  const suiClient = useSuiClient();
  const { SuiNSData, isSuiNSPending } = useResolveSuiNSName(currentAccount?.address);

  const handleExecuteTransaction = async () => {
    try {
      const tx = await suiClient.executeTransactionBlock({
          kind: 'call',
          data: {
            packageId,
            module: moduleId,
            function: functionId,
            typeArguments: [],
            arguments: [JSON.parse(args)],
          },
        sender: currentAccount.address,
      });
      setResult(tx);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex-center items-center h-screen">
      <div className="bg-base-100 w-96 shadow-xl p-4">
        <h1 className="text-2xl font-bold mb-4">Debug Component</h1>
        <form>
          <input
            type="text"
            value={packageId}
            onChange={(e) => setPackageId(e.target.value)}
            placeholder="Package ID"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            value={moduleId}
            onChange={(e) => setModuleId(e.target.value)}
            placeholder="Module ID"
            className="w-full p-2 mb-4 border-gray-300 rounded"
          />
          <input
            type="text"
            value={functionId}
            onChange={(e) => setFunctionId(e.target.value)}
            placeholder="Function ID"
            className="w-full p-2 mb-4 border-gray-300 rounded"
          />
          <input
            type="text"
            value={args}
            onChange={(e) => setArgs(e.target.value)}
            placeholder="Args (JSON)"
            className="w-full p-2 mb-4 border-gray-300 rounded"
          />
          <button
            onClick={handleExecuteTransaction}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Execute Transaction
          </button>
        </form>
     
          <div className="mt-4">
            <h2 className="text-lg font-bold">Result:</h2>
            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(result, null, 2)}</pre>
          </div>
       
   
          <div className="mt-4">
            <h2 className="text-lg font-bold">Error:</h2>
            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(error, null, 2)}</pre>
          </div>

      </div>
    </div>
  );
};

export default DebugComponent;
