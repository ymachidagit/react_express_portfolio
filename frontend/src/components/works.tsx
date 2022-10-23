import Header from './commonLayouts/header';
import Footer from './commonLayouts/footer';
import workList from './worksComponents/worksList';
import {motion, AnimatePresence} from 'framer-motion';

function Works() {

  const containerVariants = {
    hidden: {
      opacity:0,
      x:'100vw'
    },
    visible: {
      opacity: 1,
      x:0
    }
  }

  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 inline mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Works</h1>
            <div className="h-1 w-full bg-indigo-500 rounded"></div>
          </div>    
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed flex flex-wrap mb-20 text-gray-500">研究 / インターン / ハッカソンで開発したアプリ一覧</p>
        <div className="flex flex-wrap -m-4 mb-5">
          {workList.map((item)=>(
            <motion.div className="xl:w-1/4 md:w-1/2 p-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{type:'spring', delay:0.3}}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <a href={`./works/${item.path}`}>
                  <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.imgPath} alt="content"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">TITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">ABSTRACT</h3>
                    <p className="leading-relaxed text-base">{item.abstract}</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default Works;