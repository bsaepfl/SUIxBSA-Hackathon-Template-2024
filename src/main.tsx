import React from "react";
import ReactDOM from "react-dom/client";
import "@mysten/dapp-kit/dist/index.css";
import { defineConfig, loadEnv } from 'vite'

import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { networkConfig } from "./networkConfig.ts";
import './index.css'; // Import the styles.css file
import './output2.css';

export const network = import.meta.env.VITE_NETWORK || 'testnet';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork={network}>
          <WalletProvider stashedWallet={{
                name: 'BSA Starter Pack',
                network: network,
              }} autoConnect>
            <App />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
  </React.StrictMode>,
);
