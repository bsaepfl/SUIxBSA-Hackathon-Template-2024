module pool::pool {

    struct Pool has key {
        id: UID,
        pool_address: address,
        bank: <u64>,
    }

    public fun invest(coin: Coin<SUI>, ctx: &mut TxContext) {
        coin::transfer(coin, pool_address, ctx);
    }

    public fun request(ctx: &mut TxContext) {
        if User.getInvestors().contains(tx_context::sender(ctx))
    }

}