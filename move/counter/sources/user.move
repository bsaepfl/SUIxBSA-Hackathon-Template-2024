module User {
    use std::string;
    
    struct User has key, store {
        id: u64,
        username: String,
        balance: u64
    }

    public entry fun create_user (
        account: &signer,
        id: u64,
        username: string::String,
        initial_balance: u64
     ) {
        let new_user = User {
            id,
            username,
            balance: initial_balance,
        };

        move_to(account, new_user);
    };

    public fun get_balance(user: &User): u64 {
        user.balance
    }

    public entry fun add_funds(user: &mut User, amount: u64) {
        user.balance = user.balance + amount;
    }

}
