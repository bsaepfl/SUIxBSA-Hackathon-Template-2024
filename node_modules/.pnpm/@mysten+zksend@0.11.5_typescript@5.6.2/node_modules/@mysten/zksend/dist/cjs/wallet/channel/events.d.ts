import type { InferOutput } from 'valibot';
export declare const StashedRequestData: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"connect", undefined>;
}, undefined>, import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"sign-transaction-block", undefined>;
    readonly data: import("valibot").StringSchema<"`data` is required">;
    readonly address: import("valibot").StringSchema<"`address` is required">;
}, undefined>, import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"sign-personal-message", undefined>;
    readonly bytes: import("valibot").StringSchema<"`bytes` is required">;
    readonly address: import("valibot").StringSchema<"`address` is required">;
}, undefined>], undefined>;
export type StashedRequestData = InferOutput<typeof StashedRequestData>;
export declare const StashedRequest: import("valibot").ObjectSchema<{
    readonly id: import("valibot").SchemaWithPipe<[import("valibot").StringSchema<"`id` is required">, import("valibot").UuidAction<string, undefined>]>;
    readonly origin: import("valibot").SchemaWithPipe<[import("valibot").StringSchema<undefined>, import("valibot").UrlAction<string, "`origin` must be a valid URL">]>;
    readonly name: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, never>;
    readonly payload: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"connect", undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"sign-transaction-block", undefined>;
        readonly data: import("valibot").StringSchema<"`data` is required">;
        readonly address: import("valibot").StringSchema<"`address` is required">;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"sign-personal-message", undefined>;
        readonly bytes: import("valibot").StringSchema<"`bytes` is required">;
        readonly address: import("valibot").StringSchema<"`address` is required">;
    }, undefined>], undefined>;
}, undefined>;
export type StashedRequest = InferOutput<typeof StashedRequest>;
export declare const StashedResponseData: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"connect", undefined>;
    readonly address: import("valibot").StringSchema<undefined>;
}, undefined>, import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"sign-transaction-block", undefined>;
    readonly bytes: import("valibot").StringSchema<undefined>;
    readonly signature: import("valibot").StringSchema<undefined>;
}, undefined>, import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"sign-personal-message", undefined>;
    readonly bytes: import("valibot").StringSchema<undefined>;
    readonly signature: import("valibot").StringSchema<undefined>;
}, undefined>], undefined>;
export type StashedResponseData = InferOutput<typeof StashedResponseData>;
export declare const StashedResponsePayload: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"reject", undefined>;
}, undefined>, import("valibot").ObjectSchema<{
    readonly type: import("valibot").LiteralSchema<"resolve", undefined>;
    readonly data: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"connect", undefined>;
        readonly address: import("valibot").StringSchema<undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"sign-transaction-block", undefined>;
        readonly bytes: import("valibot").StringSchema<undefined>;
        readonly signature: import("valibot").StringSchema<undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"sign-personal-message", undefined>;
        readonly bytes: import("valibot").StringSchema<undefined>;
        readonly signature: import("valibot").StringSchema<undefined>;
    }, undefined>], undefined>;
}, undefined>], undefined>;
export type StashedResponsePayload = InferOutput<typeof StashedResponsePayload>;
export declare const StashedResponse: import("valibot").ObjectSchema<{
    readonly id: import("valibot").SchemaWithPipe<[import("valibot").StringSchema<undefined>, import("valibot").UuidAction<string, undefined>]>;
    readonly source: import("valibot").LiteralSchema<"zksend-channel", undefined>;
    readonly payload: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"reject", undefined>;
    }, undefined>, import("valibot").ObjectSchema<{
        readonly type: import("valibot").LiteralSchema<"resolve", undefined>;
        readonly data: import("valibot").VariantSchema<"type", [import("valibot").ObjectSchema<{
            readonly type: import("valibot").LiteralSchema<"connect", undefined>;
            readonly address: import("valibot").StringSchema<undefined>;
        }, undefined>, import("valibot").ObjectSchema<{
            readonly type: import("valibot").LiteralSchema<"sign-transaction-block", undefined>;
            readonly bytes: import("valibot").StringSchema<undefined>;
            readonly signature: import("valibot").StringSchema<undefined>;
        }, undefined>, import("valibot").ObjectSchema<{
            readonly type: import("valibot").LiteralSchema<"sign-personal-message", undefined>;
            readonly bytes: import("valibot").StringSchema<undefined>;
            readonly signature: import("valibot").StringSchema<undefined>;
        }, undefined>], undefined>;
    }, undefined>], undefined>;
}, undefined>;
export type StashedResponse = InferOutput<typeof StashedResponse>;
export type StashedRequestTypes = Record<string, any> & {
    [P in StashedRequestData as P['type']]: P;
};
export type StashedResponseTypes = {
    [P in StashedResponseData as P['type']]: P;
};
