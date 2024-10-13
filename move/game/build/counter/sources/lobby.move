module game::lobby {  
    use sui::tx_context::{Self, TxContext};  
    use sui::coin::{Self, Coin};  
    use sui::object::{Self, UID};  // Import UID and new_uid function  
    use sui::balance::{Self, Balance};  
    use sui::sui::SUI;  
    use std::string::String;  
    use 0x1::option::{Option, some, none, is_none, borrow};  
  
    public struct Round has store, drop, copy {  
        begining_price: u64,  
        bet_player_1: bool,  
        bet_player_2: bool,  
    }  
  
    public struct Lobby has key, store {  
        id: UID,  
        players: vector<User>,  
        stack: Balance<SUI>,  
        bet_value: u64,  
        round_value: u64,  
        max_round: u64,  
        balance: Balance<SUI>,  
        current_round: Option<Round>,  
    }  
 
    public struct User has key, store {  
        id: UID,  
        username: String,  
        balance: Balance<SUI>,  
        games_played: u64, 
        add: address,  
    }  
  
    public fun create_user (  
        account: &signer,  
        username: String,  
        initial_balance:Balance<SUI>,  
        addr: address, 
        ctx: &mut TxContext 
     ): User {  
        let new_user = User {  
            id: object::new(ctx),  
            username,  
            balance: initial_balance,  
            games_played: 0,  
            add: addr, 
        };  
        new_user  
    }  
  
    public fun create_lobby(new_players: vector<User>, new_bet_value: u64, new_max_round: u64, ctx: &mut TxContext): Lobby {  
        return Lobby {  
            id: object::new(ctx),  
            players: new_players,  
            stack: balance::zero<SUI>(),  
            bet_value: new_bet_value,  
            round_value: 0,  
            max_round: new_max_round,  
            balance: balance::zero<SUI>(),  
            current_round: none<Round>(),  
        }  
    }  
      
    public fun increase_round(lobby: &mut Lobby) {  
        let new_round = lobby.round_value + 1;  
        lobby.round_value = new_round;  
    }  
  
    public fun isFinished(lobby: &Lobby): bool {  
        (lobby.max_round == lobby.round_value)  
    }  
 
    public fun get_all_booleans(first_choice: bool, second_choice: bool, first_player_bet: bool, second_player_bet: bool, lobby: &mut Lobby, ctx: &mut TxContext) { 
        if (!(first_choice && second_choice)) { 
            //split money 
            //withdraw 
 
        } else { 
            let new_round = create_round(first_player_bet, second_player_bet, lobby); 
            change_lobby_round(new_round, lobby); 
            end_current_round(lobby, ctx); 
        } 
    } 
  
    public fun create_round(first_player_bet: bool, second_player_bet: bool, lobby: &mut Lobby): Round { //TODO : the one which cals create round has to call increse round also  
        let price_at_beggining: u64 = 0; //TODO : change to change price  
        Round {  
            begining_price: price_at_beggining,  
            bet_player_1: first_player_bet,  
            bet_player_2: second_player_bet,  
        }  
    }  
  
    public fun change_lobby_round(round: Round, lobby: &mut Lobby) {  
        increase_round(lobby); 
        let option_round = some(round);  
        lobby.current_round = option_round;  
    }  
 
     public fun win_prize(winner: address, lobby:&mut Lobby, ctx: &mut TxContext) {  
        let amount = balance::value(& lobby.balance);  
        let tax = 1 >> 5;  
        let final = balance::split(&mut lobby.balance, 1-amount*tax );  
        let to_send = coin::from_balance(final, ctx);  
        transfer::public_transfer(to_send, winner);   
    }      
  
    public fun end_current_round(lobby: &mut Lobby, ctx: &mut TxContext) { //TODO : give price eft on sait pas  
        let option_round: Option<Round> = lobby.current_round;  
        assert!(!is_none(&option_round));  
        let round: &Round = borrow(&option_round);  
        if (round.bet_player_1 == round.bet_player_2) {  
            if (isFinished(lobby)) {  
                //give back the half of the stack at each player
            } else { 
                //call frontend method which restart the next round 
                 
            } 
        } else { 
            //wait from the frontend 
            let ending_price: u64 = 0; //get the sui value 
            let change: bool = (round.begining_price < ending_price); 
            let player1: User = vector::pop_back(&mut lobby.players); 
            let player2: User = vector::pop_back(&mut lobby.players); 
            if (round.bet_player_1 == change) { 
                win_prize(player1.add, lobby, ctx); 
            } else { win_prize(player2.add, lobby, ctx); }; 
            vector::push_back(&mut lobby.players, player1); 
            vector::push_back(&mut lobby.players, player2); 
        } 
    }  
 
    //the most successful methods  
    fun transfer_balance(lobby:&mut Lobby, amount: u64, coin: &mut Coin<SUI>)  {  
        let valueBalance = balance::join(&mut lobby.balance, balance::split(coin::balance_mut(coin), amount));  
    }  
  
  
    fun withdraw(lobby: &mut Lobby) {  
        balance::destroy_zero(balance::withdraw_all(&mut lobby.balance));  
    }  
 
    fun addStack(lobby: &mut Lobby) { 
        let borrow_stack = balance::split(&mut lobby.balance, lobby.bet_value*2); 
        let final_stack = balance::join(&mut lobby.stack, borrow_stack); 
    } 
  
}