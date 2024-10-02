import { useResolveSuiNSName } from '@mysten/dapp-kit';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { ConnectModal, useCurrentAccount } from '@mysten/dapp-kit';
import Navbar from '../components/Navbar'; // Import your Navbar component
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { network } from '../main';





const NFTLogic = () => {
  const currentAccount = useCurrentAccount();
  const [nftUrls, setNftUrls] = useState({});

  const { SuiNSData, isSuiNSPending } = useResolveSuiNSName(currentAccount?.address);
  

  const { data: NFTData, isPending, isError, error, refetch } = useSuiClientQuery(
    'getOwnedObjects',
    { owner: currentAccount?.address ,
      MatchAll: [
        {
          Field: {
            fieldName: 'display',
            
          },
        },
      ],

    options: {
        "showType": true,
        "showOwner": true,
        "showPreviousTransaction": true,
        "showDisplay": true,
        "showContent": true,
        "showBcs": false,
        "showStorageRebate": false
      }
    },
    {
      gcTime: 10000,
    },
  );
  console.log(NFTData)
  

  return (
    <div className="flex justify-center items-center w-full">


        
 <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
          { NFTData?.data.filter(nft => nft?.data?.display?.data !== null).map((nft, index) => (
            <div key={index} className="card bg-base-100  shadow-xl text-sm" >            
            <div className="card-body">
              <h1 className="card-title text-3xl text-center">{nft?.data?.display?.data?.name}</h1>
              <p className="text-sm font-bold">Creator: {nft?.data?.display?.data?.creator}</p>

              <p className="text-sm">Description: {nft?.data?.display?.data?.description}</p>
              
              <p className="text-sm mt-4">Project URL: <a href={nft?.data?.display?.data?.project_url} target="_blank" rel="noopener noreferrer" className="link link-primary">{nft?.data?.display?.data?.project_url}</a></p>
              <figure>
                <img src={nft?.data?.display?.data?.image_url} alt="NFT Image" className="w-full mt-4" />
              </figure>
              <div className="card-actions justify-center mt-8">
                <button className="btn btn-wide" onClick={() => window.open(`https://suiscan.xyz/${network}/object/${nft?.data.objectId.toString()}`, '_blank')}>View on Sui Explorer</button>
              </div>
            </div>
            </div>
          )) }
        </div>
        
         
      
    </div>

  );
};

export default NFTLogic;
