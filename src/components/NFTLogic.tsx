import { useResolveSuiNSName } from '@mysten/dapp-kit';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { ConnectModal, useCurrentAccount } from '@mysten/dapp-kit';
import Navbar from '../components/Navbar'; // Import your Navbar component
import { Box, Container, Flex, Heading } from "@radix-ui/themes";


const NFTLogic = () => {
  const currentAccount = useCurrentAccount();

  const { SuiNSData, isSuiNSPending } = useResolveSuiNSName(currentAccount?.address);

  const { data: NFTData, isPending, isError, error, refetch } = useSuiClientQuery(
    'getOwnedObjects',
    { owner: currentAccount?.address },
    {
      gcTime: 10000,
    },
  );

  console.log(NFTData);

 

  return (
    <div className="flex justify-center items-center h-screen">


        
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NFTData?.data.map((nft, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-xl text-sm">
              <div className="card-body ">
                <h1 className="card-title">{nft?.data.objectId}</h1>
                <p className="text-sm truncateBoth">{nft?.data?.digest}</p>
                <p className="text-sm">{nft?.data?.version}</p>


                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
         
      
    </div>

  );
};

export default NFTLogic;
