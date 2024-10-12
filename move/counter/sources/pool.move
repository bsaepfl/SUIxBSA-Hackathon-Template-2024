module pool::pool {

    struct Pool has key {
        id: UID,
        pool_address: address,
        bank: <u64>,
    }

    struct InvestmentTicket has key, store {
        id: UID;
        ticket_address: address,
        investor_addres: address,
        invested_amount: <u64>,
    }

    public fun invest(coin: Coin<SUI>, ctx: &mut TxContext): InvestmentTicket = 
        coin::transfer(coin, pool_address, ctx);
        let ticket: InvestmentTicket = InvestmentTicket{
            id: tx_context::generate(ctx),
            ticket_address: 
        }


    public fun request(ctx: &mut TxContext) {
        let sender = tx_context::sender(ctx);
        let investors = User.getInvestors();


    }
}
    