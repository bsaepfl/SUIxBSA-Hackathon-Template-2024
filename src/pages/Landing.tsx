import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useCurrentAccount } from '@mysten/dapp-kit';





const Landing = () => {

  const currentAccount = useCurrentAccount()
  const currentAdress = currentAccount?.address

  return (
    <div className="flex justify-center items-center bg-base-200 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 mt-20">
        <section className="hero bg-base-100 rounded-lg shadow-md mb-8">
          <div className="hero-content text-center py-12">
            <div className="max-w-lg mx-auto">
              <h1 className="text-6xl font-bold mb-6 text-blue-600">Up and Down</h1>
              
              <p className="text-lg mb-8 text-gray-600 max-w-md mx-auto">
                Welcome to Up and Down! Join a game to bet on the evolution of the price of SUI. Put 10 SUI in the pot, and for each round without a winner or a loser, the pot increments by 1. Once there is a round with a winner and a loser, the winner takes all the money! Careful ! If you do not enter a bet before the time limit, you automatically lose the game.
              </p>

              <Link to="/" className="btn btn-primary bg-blue-500 hover:bg-blue-600 py-4 px-4 text-lg rounded-lg mb-10">
                Play Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
