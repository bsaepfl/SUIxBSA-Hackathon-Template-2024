import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Counter } from "./components/CounterComponents/Counter";
import { CreateCounter } from "./components/CounterComponents/CreateCounter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NFT from './pages/NFT';
import Debug from './pages/Debug';
import Contract from './pages/Contract';

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
        <Route path="/Contract" element={<Contract />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
