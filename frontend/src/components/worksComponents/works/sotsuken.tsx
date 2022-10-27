import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {motion, AnimatePresence} from 'framer-motion';
import './workTab.css'
import eyeInputKeyboardVideo from '../../../../public/videos/eyeInputKeyboardVideo.mp4'

function Sotsuken() {
  const work = workList[0]

  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
        <div className="flex flex-wrap w-full mb-3">
          <div className="inline mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{work.title}</h1>
            <div className="h-1 w-full bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-1" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-1">開発の経緯</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.motive}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-2" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-2">概要</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.abstract}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-3" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-3">開発の目的</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.purpose}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-4" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-4">技術スタック</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.techStack}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-detail" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-detail">詳細</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="">・使用ツール：HoloLens2</p>
            <p className="">・注視点にカーソルを表示<br/>・注視しているキーの色を赤くする視覚フィードバック<br/>・入力確定時のビープ音による音声フィードバック（動画では音声は流れません）</p>
            <video className="mx-auto" src={eyeInputKeyboardVideo} autoPlay loop></video>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-5" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-5">自分の役割</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.myRole}</p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-6" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-6">賞</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="p-5">{work.award}</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Sotsuken;