module game::lobby {  
    use sui::clock::Clock;  
    use sui::tx_context::{Self, TxContext};  
    use sui::coin::{Self, Coin};  
    use sui::object::{Self, UID};  // Import UID and new_uid function  
    use sui::balance::{Self, Balance};  
    use sui::sui::SUI;  
    use std::string::String;  
    use 0x1::option::{Option, some, none, is_some, is_none, borrow};  
    use sui::random::RandomGenerator; 
    use sui::random::Random; 
  
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
 
    public fun get_all_booleans(first_choice: bool, second_choice: bool, first_player_bet: bool, second_player_bet: bool) { 
 
    } 
  
    public fun create_round(first_player_bet: bool, second_player_bet: bool): Round { //TODO : the one which cals create round has to call increse round also  
        let price_at_beggining: u64 = 0; //TODO : change to change price  
        Round {  
            begining_price: price_at_beggining,  
            bet_player_1: first_player_bet,  
            bet_player_2: second_player_bet,  
        }  
    }  
  
    public fun change_lobby_round(round: Round, lobby: &mut Lobby) {  
        let option_round = some(round);  
        lobby.current_round = option_round;  
    }  
  
    public fun end_current_round(lobby: &mut Lobby) {
        let option_round: Option<Round> = lobby.current_round;  
        assert!(!is_none(&option_round));  
        let round: &Round = borrow( 
            &option_round);  
        if (round.bet_player_1 == round.bet_player_2) {  
            if (isFinished(lobby)) {  
                //give back the half of the stack at each player  
            }  
        }  
    }  
 
    //the most successful methods  
    fun transfer_balance(lobby:&mut Lobby, amount: u64, coin: &mut Coin<SUI>, ctx: &TxContext)  {  
        let valueBalance = balance::join(&mut lobby.balance, balance::split(coin::balance_mut(coin), amount));  
    }  
  
    fun win_prize(winner: address, lobby:&mut Lobby, ctx: &mut TxContext) {  
        let amount = balance::value(& lobby.balance);  
        let tax = 1 >> 5;  
        let final = balance::split(&mut lobby.balance, 1-amount*tax );  
        let to_send = coin::from_balance(final, ctx);  
        transfer::public_transfer(to_send, winner);   
    }      
  
    fun withdraw(lobby: &mut Lobby) {  
        balance::destroy_zero(balance::withdraw_all(&mut lobby.balance));  
    }  
 
    fun addStack(lobby: &mut Lobby) { 
        let borrow_stack = balance::split(&mut lobby.balance, lobby.bet_value*2); 
        let final_stack = balance::join(&mut lobby.stack, borrow_stack); 
    } 
  
    public struct User has key, store {  
        id: UID,  
        username: String,  
        balance: Balance<SUI>,  
        games_played: u64  
    }  
  
    public fun create_user (  
        account: &signer,  
        username: String,  
        initial_balance:Balance<SUI>,  
        ctx:&mut TxContext,  
     ): User {  
        let new_user = User {  
            id: object::new(ctx),  
            username,  
            balance: initial_balance,  
            games_played: 0  
        };  
        new_user  
    }  
 
     public fun get_random_begin_price(g: &mut random::RandomGenerator): u64 { 
        let rand: u64 = random::generate_u64(g); 
        let newRand: u64 = rand % 60000; 
        let randomNumber: u64 = (170000 + newRand); 
        randomNumber 
    } 
  
}