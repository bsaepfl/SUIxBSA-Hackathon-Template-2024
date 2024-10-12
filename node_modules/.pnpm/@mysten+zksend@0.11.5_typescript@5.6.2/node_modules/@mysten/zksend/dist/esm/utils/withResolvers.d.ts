export interface Resolvers<T = any> {
    promise: Promise<T>;
    reject: (error: Error) => void;
    resolve: (value: T) => void;
}
export declare function withResolvers<T = any>(): Resolvers<T>;
