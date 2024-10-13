import type { InferOutput } from 'valibot';
import type { StashedSupportedNetwork } from '../types.js';
import type { StashedRequestData, StashedResponsePayload, StashedResponseTypes } from './events.js';
import { StashedRequest, StashedResponse } from './events.js';
export declare const DEFAULT_STASHED_ORIGIN = "https://getstashed.com";
export { StashedRequest, StashedResponse };
export declare class StashedPopup {
    #private;
    constructor({ name, network, origin, }: {
        name: string;
        network: StashedSupportedNetwork;
        origin?: string;
    });
    send<T extends StashedRequestData['type']>({ type, ...data }: {
        type: T;
    } & Extract<StashedRequestData, {
        type: T;
    }>): Promise<StashedResponseTypes[T]>;
    close(): void;
}
export declare class StashedHost {
    #private;
    constructor(request: InferOutput<typeof StashedRequest>);
    static fromUrl(url?: string): StashedHost;
    getRequestData(): {
        id: string;
        origin: string;
        payload: {
            type: "connect";
        } | {
            type: "sign-transaction-block";
            address: string;
            data: string;
        } | {
            type: "sign-personal-message";
            bytes: string;
            address: string;
        };
        name?: string | undefined;
    };
    sendMessage(payload: StashedResponsePayload): void;
    close(payload?: StashedResponsePayload): void;
}
