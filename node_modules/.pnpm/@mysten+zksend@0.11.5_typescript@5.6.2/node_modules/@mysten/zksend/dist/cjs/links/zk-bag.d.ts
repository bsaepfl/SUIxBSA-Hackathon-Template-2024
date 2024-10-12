import type { Argument, Transaction, TransactionObjectArgument } from '@mysten/sui/transactions';
export interface ZkBagContractOptions {
    packageId: string;
    bagStoreId: string;
    bagStoreTableId: string;
}
export declare const TESTNET_CONTRACT_IDS: ZkBagContractOptions;
export declare const MAINNET_CONTRACT_IDS: ZkBagContractOptions;
export declare function getContractIds(network?: 'mainnet' | 'testnet'): ZkBagContractOptions;
export declare class ZkBag<IDs> {
    #private;
    ids: IDs;
    constructor(packageAddress: string, ids: IDs);
    new({ arguments: [store, receiver], }: {
        arguments: [store: TransactionObjectArgument | string, receiver: Argument | string];
    }): (tx: Transaction) => void;
    add({ arguments: [store, receiver, item], typeArguments, }: {
        arguments: [
            store: TransactionObjectArgument | string,
            receiver: Argument | string,
            item: TransactionObjectArgument | string
        ];
        typeArguments: [string];
    }): (tx: Transaction) => Extract<Argument, {
        $kind: 'Result';
    }>;
    init_claim({ arguments: [store] }: {
        arguments: [store: TransactionObjectArgument | string];
    }): (tx: Transaction) => readonly [{
        $kind: "NestedResult";
        NestedResult: [number, number];
    }, {
        $kind: "NestedResult";
        NestedResult: [number, number];
    }];
    reclaim({ arguments: [store, receiver], }: {
        arguments: [store: TransactionObjectArgument | string, receiver: Argument | string];
    }): (tx: Transaction) => readonly [{
        $kind: "NestedResult";
        NestedResult: [number, number];
    }, {
        $kind: "NestedResult";
        NestedResult: [number, number];
    }];
    claim({ arguments: [bag, claim, id], typeArguments, }: {
        arguments: [
            bag: TransactionObjectArgument | string,
            claim: Extract<Argument, {
                $kind: 'NestedResult';
            }>,
            id: TransactionObjectArgument | string
        ];
        typeArguments: [string];
    }): (tx: Transaction) => Extract<Argument, {
        $kind: 'Result';
    }>;
    finalize({ arguments: [bag, claim], }: {
        arguments: [
            bag: TransactionObjectArgument | string,
            claim: Extract<Argument, {
                $kind: 'NestedResult';
            }>
        ];
    }): (tx: Transaction) => void;
    update_receiver({ arguments: [bag, from, to], }: {
        arguments: [
            bag: TransactionObjectArgument | string,
            from: Argument | string,
            to: Argument | string
        ];
    }): (tx: Transaction) => void;
}
