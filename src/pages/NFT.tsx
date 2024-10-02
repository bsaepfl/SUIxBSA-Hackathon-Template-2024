import { useResolveSuiNSName } from '@mysten/dapp-kit';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { ConnectModal, useCurrentAccount } from '@mysten/dapp-kit';
import Navbar from '../components/Navbar'; // Import your Navbar component
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import NFTLogic from '../components/NFTLogic';


const NFT = () => {
  const currentAccount = useCurrentAccount();

  const { SuiNSData, isSuiNSPending } = useResolveSuiNSName(currentAccount?.address);

  const { data, isPending, isError, error, refetch } = useSuiClientQuery(
    'getOwnedObjects',
    { owner: currentAccount?.address },
    {
      gcTime: 10000,
    },
  );

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Navbar />
        <div className="loader">Loading</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Navbar />
        <div className="text-2xl text-red-500">Err {error.message}</div>
      </div>
    );
  }

  return (
    <div className=" bg-base-200 " >
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <section className="hero bg-base-100 rounded-lg shadow-md ">  
          <NFTLogic />
        </section>
      </main>
    </div>

  );
};

export default NFT;
