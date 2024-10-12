module game::game {
    use sui::clock::Clock;


    public struct Bet has key, store {
        id: UID,
        amount: u64,
        entry_price: u64,
        player: User,
        entry_hour: u64 //use timpstamp_ms 
    }

    public struct Game has key, store {
        players: vector<Player>,
        bets: vector<Bet>,
    }

    public fun create_game()




}