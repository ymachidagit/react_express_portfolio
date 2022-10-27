import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {motion, AnimatePresence} from 'framer-motion';
import './workTab.css'
import librarianDetail1 from '../../../../public/images/librarianDetail1.png'
import librarianDetail2 from '../../../../public/images/librarianDetail2.png'
import librarianDetail3 from '../../../../public/images/librarianDetail3.png'
import librarianDetail4 from '../../../../public/images/librarianDetail4.png'
import librarianDetail5 from '../../../../public/images/librarianDetail5.png'
import librarianDetail6 from '../../../../public/images/librarianDetail6.png'

function IngageIntern() {
  const work = workList[5]

  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
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
            <img className="mx-auto" src={librarianDetail1}></img>
            <p className="text-center mb-5">寄贈されている図書の一覧画面</p>
            <img className="mx-auto" src={librarianDetail2}></img>
            <p className="text-center mb-5">借りている図書の一覧画面</p>
            <img className="mx-auto" src={librarianDetail3}></img>
            <p className="text-center mb-5">寄贈する図書の登録画面</p>
            <img className="mx-auto" src={librarianDetail4}></img>
            <p className="text-center mb-5">著者の登録画面</p>
            <img className="mx-auto" src={librarianDetail5}></img>
            <p className="text-center mb-5">マイページ</p>
            <img className="mx-auto" src={librarianDetail6}></img>
            <p className="text-center">ランキングページ</p>
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

export default IngageIntern;