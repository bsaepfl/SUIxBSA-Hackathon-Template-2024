
import Navbar from '../components/Navbar';
import Graphic from '../components/Graphic';
import Bottom from '../components/Bottom';
import Countdown from '../components/Coundown';


const Home = () => {

  const data = [10, 20, 30, 40, 50, 60, 70];
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  return (
   
    <div className="flex justify-center items-center bg-base-200 " >


      <Navbar />

      <main className="container mx-auto px-4 mt-20">
        <section className="hero bg-base-100 rounded-lg shadow-md mb-8 flex flex-col">
          <div className="max-w-md">
            <Countdown initialSeconds={10} />
            <Graphic data={data} labels={labels} />
            <Bottom />
              
          </div>
         
        </section>
      </main>

      
      </div>
  );
};

export default Home;
