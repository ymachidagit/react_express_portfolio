import Header from './commonLayouts/header';
import Footer from './commonLayouts/footer';

function About() {
  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>    
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed flex flex-wrap mb-20 text-gray-500">自己紹介</p>
        <div className="flex flex-wrap -m-4">
        </div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default About;