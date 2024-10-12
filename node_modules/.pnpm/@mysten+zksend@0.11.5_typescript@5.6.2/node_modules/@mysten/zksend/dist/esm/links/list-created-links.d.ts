import type { SuiClient } from '@mysten/sui/client';
import { ZkSendLink } from './claim.js';
import type { ZkBagContractOptions } from './zk-bag.js';
export declare function listCreatedLinks({ address, cursor, network, contract, fetch: fetchFn, ...linkOptions }: {
    address: string;
    contract?: ZkBagContractOptions;
    cursor?: string;
    network?: 'mainnet' | 'testnet';
    host?: string;
    path?: string;
    claimApi?: string;
    client?: SuiClient;
    fetch?: typeof fetch;
}): Promise<{
    cursor: string | null;
    hasNextPage: boolean;
    links: {
        link: ZkSendLink;
        claimed: boolean;
        assets: import("./utils.js").LinkAssets;
        digest: string | null;
        createdAt: string;
    }[];
}>;
