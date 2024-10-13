module game::random_generator { 
    use sui::random; 
 
    public fun get_random_begin_price(g: &mut random::RandomGenerator): u64 { 
        let rand: u64 = random::generate_u64(g); 
        let newRand: u64 = rand % 60000; 
        let randomNumber: u64 = (170000 + newRand); 
        randomNumber 
    } 
 
}