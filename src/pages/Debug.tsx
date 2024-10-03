import { useResolveSuiNSName } from '@mysten/dapp-kit';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { ConnectModal, useCurrentAccount } from '@mysten/dapp-kit';
import Navbar from '../components/Navbar'; // Import your Navbar component
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import DebugComponent from '../components/DebugComponent';

const Debug = () => {
  const currentAccount = useCurrentAccount();

  const { SuiNSData, isSuiNSPending } = useResolveSuiNSName(currentAccount?.address);

  

  return (
    <div className="flex justify-center items-center bg-base-200 " >
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <section className="hero bg-base-100 rounded-lg shadow-md mb-8">  
          <h1 className='font-bold' >Debug</h1>
            <DebugComponent />
        </section>
      </main>
    </div>

  );
};

export default Debug;
