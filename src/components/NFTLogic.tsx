import { useResolveSuiNSName } from '@mysten/dapp-kit';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { ConnectModal, useCurrentAccount } from '@mysten/dapp-kit';
import Navbar from '../components/Navbar'; // Import your Navbar component
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useEffect, useState } from "react";



const NFTDetail = ({ objectId }) => {
  const { data: nftDetail } = useSuiClientQuery(
    'getDynamicFieldObject',
    { parentId: objectId, name: {type: 'url', value: "display"} },
    {
      gcTime: 10000,
    },
  );

  return (
    <div>
      {nftDetail && (
        <img src={nftDetail.data.display} alt="NFT Image" />
      )}
    </div>
  );
};


const NFTLogic = () => {
  const currentAccount = useCurrentAccount();
  const [nftUrls, setNftUrls] = useState({});

  const { SuiNSData, isSuiNSPending } = useResolveSuiNSName(currentAccount?.address);

  const { data: NFTData, isPending, isError, error, refetch } = useSuiClientQuery(
    'getOwnedObjects',
    { owner: currentAccount?.address },
    {
      gcTime: 10000,
    },
  );

  const { data: NFTDetails, isPending: isPendingDetails, isError: isErrorDetails, error: errorDetails } = useSuiClientQuery(
    'getObject',
    { id: NFTData?.data[0]?.data.objectId },
    {
      gcTime: 10000,
    },
  );

  const nftDetails = NFTData?.data.map((nft) => {
  const { data: nftDetail } = useSuiClientQuery(
    'getDynamicFieldObject',
    { parentId: nft.data.objectId, name: {type: 'url', value: "display"} },
    {
      gcTime: 10000,
    },
  );
  console.log(nftDetail)
  return { objectId: nftDetail?.data?.objectId, url: nftDetail?.data?.display };
});


  //console.log(nftDetails);


  return (
    <div className="flex justify-center items-center h-screen">


        
 <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-4">
 {NFTData?.data.map((nft, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-xl text-sm" >            <div className="card-body ">
                <h1 className="card-title">{nft?.data.objectId}</h1>
                <p className="text-sm truncateBoth">{nft?.data?.digest}</p>
                <p className="text-sm">{nft?.data?.version}</p>
                <NFTDetail objectId={nft.data.objectId} />
                <div className="card-actions justify-end">
                  <button className="btn btn">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
         
      
    </div>

  );
};

export default NFTLogic;
