
import Navbar from '../components/Navbar';


const Home = () => {
  return (
   
    <div className="flex justify-center items-center bg-base-200 " >


      <Navbar />

      <main className="container mx-auto px-4 mt-20">
        <section className="hero bg-base-100 rounded-lg shadow-md mb-8">
          <div className="hero-content text-center  py-12">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-4 text-blue-600">The SUI x BSA Template</h1>
              <p className="mb-6 ">
              Welcome to the [BSA](https://bsaepfl.ch/) x [SUI](https://sui.io/) Hackathon Official Starter Pack ! This kit should provide you with tons of tools to make your hackathon experience seamless and easy, so ou can focus on what you do best ! 

              </p>
              <button className="btn btn-primary bg-blue-500 hover:bg-blue-600">Start Building</button>
            </div>
          </div>
        </section>

        <section className=" bg-base-100 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Made with Heart By Loris</h2>
          <p className="text-center max-w-2xl mx-auto ">
          This starter pack was made by BSA comitee member [Loris](https://github.com/Loris-EPFL), feel free to contact me for any questions, bug reports, etc...
          </p>
        </section>

        <section className="bg-base-100 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Key Features</h2>

          <div className="gap-4 block w-full flex justify-center">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-blue-500">Easy Styling</h3>
                <p className="text-black dark:text-gray-300">Thanks to tailwind and daisyUI, styling is pretty EZ. Just use the premade daisyUI components or customize them to your liking.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-blue-500">Show your objects</h3>
                <p className="">The NFT component fetches all the objects of your wallet and display them to you if available ! Feel free to modify it to your liking</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-blue-500">Easy Onboarding</h3>
                <p className="">No Wallet ? No problem ! Just connect your google account and we'll generate a wallet address just for you !
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-100 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">SUI Move Repository</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-base-100">
                  <th className="text-left py-2 px-4 text-blue-500">Item</th>
                  <th className="text-left py-2 px-4 text-blue-500">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Repository Name</td>
                  <td className="py-2 px-4 border-b">Sui Move Template</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Owner</td>
                  <td className="py-2 px-4 border-b">Loris-EPFL</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Language</td>
                  <td className="py-2 px-4 border-b">Move</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Repository Link</td>
                  <td className="py-2 px-4 border-b">
                   
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Description</td>
                  <td className="py-2 px-4">A Move template for SUI x BSA 2024 Hackathon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      
      </div>
  );
};

export default Home;
