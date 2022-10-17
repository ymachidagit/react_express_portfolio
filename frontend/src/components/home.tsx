import Header from './commonLayouts/header';
import Footer from './commonLayouts/footer';

function Home() {
  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col items-center bg-green-200">
        <h1 className="">Home</h1>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;