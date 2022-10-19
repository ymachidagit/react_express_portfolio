import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {motion, AnimatePresence} from 'framer-motion';
import './workTab.css'

function KDGHACKS() {
  const work = workList[2]

  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-1" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer" htmlFor="tab-multi-1">開発の経緯</label>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.motive}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-2" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer" htmlFor="tab-multi-2">概要</label>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.abstract}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-3" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer" htmlFor="tab-multi-3">開発の目的</label>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.purpose}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-4" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer" htmlFor="tab-multi-4">技術スタック</label>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.techStack}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-5" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer" htmlFor="tab-multi-5">自分の役割</label>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.myRole}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-6" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer" htmlFor="tab-multi-6">賞</label>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.award}</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default KDGHACKS;