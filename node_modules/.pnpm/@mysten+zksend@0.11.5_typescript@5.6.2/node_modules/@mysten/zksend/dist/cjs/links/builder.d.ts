import { SuiClient } from '@mysten/sui/client';
import type { Keypair, Signer } from '@mysten/sui/cryptography';
import type { TransactionObjectArgument, TransactionObjectInput } from '@mysten/sui/transactions';
import { Transaction } from '@mysten/sui/transactions';
import type { ZkBagContractOptions } from './zk-bag.js';
interface ZkSendLinkRedirect {
    url: string;
    name?: string;
}
export interface ZkSendLinkBuilderOptions {
    host?: string;
    path?: string;
    keypair?: Keypair;
    network?: 'mainnet' | 'testnet';
    client?: SuiClient;
    sender: string;
    redirect?: ZkSendLinkRedirect;
    contract?: ZkBagContractOptions | null;
}
export interface CreateZkSendLinkOptions {
    transaction?: Transaction;
    calculateGas?: (options: {
        balances: Map<string, bigint>;
        objects: TransactionObjectInput[];
        gasEstimateFromDryRun: bigint;
    }) => Promise<bigint> | bigint;
}
export declare class ZkSendLinkBuilder {
    #private;
    objectIds: Set<string>;
    objectRefs: {
        ref: TransactionObjectArgument;
        type: string;
    }[];
    balances: Map<string, bigint>;
    sender: string;
    network: 'mainnet' | 'testnet';
    keypair: Keypair;
    constructor({ host, path, keypair, network, client, sender, redirect, contract, }: ZkSendLinkBuilderOptions);
    addClaimableMist(amount: bigint): void;
    addClaimableBalance(coinType: string, amount: bigint): void;
    addClaimableObject(id: string): void;
    addClaimableObjectRef(ref: TransactionObjectArgument, type: string): void;
    getLink(): string;
    create({ signer, ...options }: CreateZkSendLinkOptions & {
        signer: Signer;
        waitForTransaction?: boolean;
    }): Promise<import("@mysten/sui/client").SuiTransactionBlockResponse>;
    createSendTransaction({ transaction, calculateGas, }?: CreateZkSendLinkOptions): Promise<Transaction>;
    createSendToAddressTransaction({ transaction, address, }: CreateZkSendLinkOptions & {
        address: string;
    }): Promise<Transaction>;
    static createLinks({ links, network, client, transaction, contract: contractIds, }: {
        transaction?: Transaction;
        client?: SuiClient;
        network?: 'mainnet' | 'testnet';
        links: ZkSendLinkBuilder[];
        contract?: ZkBagContractOptions;
    }): Promise<Transaction>;
}
export {};
