import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Counter } from "./Counter";
import { CreateCounter } from "./CreateCounter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NFT from './pages/NFT';
import Debug from './pages/Debug';

function App() {
  const currentAccount = useCurrentAccount();
  const [counterId, setCounter] = useState(() => {
    const hash = window.location.hash.slice(1);
    return isValidSuiObjectId(hash) ? hash : null;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/Debug" element={<Debug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
