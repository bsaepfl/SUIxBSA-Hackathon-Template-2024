module game::main { 
    use game::lobby::User; 
    use game::lobby::Lobby; 
    use game::lobby; 
 
    const PlayersPerLobby: u64 = 2; 
 
    public struct Main { 
        lobbys: vector<Lobby>, 
        temporary_players: vector<User>, 
    } 
 
    public fun add_player_in_waitlist(players: &mut vector<User>, player: User) { 
        vector::push_back(players, player); 
    } 
 
    public fun add_lobby(lobbys: &mut vector<Lobby>, lobby: Lobby) { 
        vector::push_back(lobbys, lobby); 
    } 
 
 
    public fun update(main: &mut Main, ctx: &mut TxContext) { 
        if (vector::length(&main.temporary_players) >= PlayersPerLobby) { 
            let player1: User = vector::pop_back(&mut main.temporary_players); 
            let player2: User = vector::pop_back(&mut main.temporary_players); 
             
            let mut player_list: vector<User> = vector::empty<User>(); 
            vector::push_back(&mut player_list, player1); 
            vector::push_back(&mut player_list, player2); 
 
            let bet_value: u64 = 1; 
            let max_round: u64 = 10; 
            let new_lobby: Lobby = lobby::create_lobby(player_list, bet_value, max_round, ctx); 
            add_lobby(&mut main.lobbys, new_lobby); 
        } 
 
    } 
}