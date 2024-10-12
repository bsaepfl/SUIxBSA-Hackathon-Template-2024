import type { ObjectOwner, SuiObjectChange, SuiTransactionBlockResponse } from '@mysten/sui/client';
import type { Transaction } from '@mysten/sui/transactions';
export interface LinkAssets {
    balances: {
        coinType: string;
        amount: bigint;
    }[];
    nfts: {
        objectId: string;
        type: string;
        version: string;
        digest: string;
    }[];
    coins: {
        objectId: string;
        type: string;
        version: string;
        digest: string;
    }[];
}
export declare function isClaimTransaction(tx: Transaction, options: {
    packageId: string;
}): boolean;
export declare function getAssetsFromTransaction({ transaction, address, isSent, }: {
    transaction: SuiTransactionBlockResponse;
    address: string;
    isSent: boolean;
}): LinkAssets;
export declare function ownedAfterChange(objectChange: SuiObjectChange, address: string): objectChange is Extract<SuiObjectChange, {
    type: 'created' | 'transferred' | 'mutated';
}>;
export declare function isOwner(owner: ObjectOwner, address: string): owner is {
    AddressOwner: string;
};
