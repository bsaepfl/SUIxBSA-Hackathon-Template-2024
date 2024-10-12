module User {
    
    use std::vector;

    struct User has key, store {
        id: u64,
        username: String,
        balance: u64
    }

    public entry fun create_user (
        account: &signer,
        id: u64,
        username: String,
        initial_balance: u64
     ) {
        let new_user = User {
            id,
            username,
            balanace: initial_balance
        }
    }

    
}
