import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import '../commonLayouts/workTab.css'
import eyeInputKeyboardVideo from '../../../../public/videos/eyeInputKeyboardVideo.mp4'

function Sotsuken() {
  const work = workList[0]

  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
        <WorkTitle work={work}/>
        <WorkAbstract work={work}/>
        <WorkMotive work={work}/>
        <WorkPurpose work={work}/>
        <WorkTeckStack work={work}/>
        <WorkMyRole work={work}/>
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-detail" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-detail">詳細</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <p className="">・使用ツール：HoloLens2</p>
            <p className="">・注視点にカーソルを表示<br/>・注視しているキーの色を赤くする視覚フィードバック<br/>・入力確定時のビープ音による音声フィードバック（動画では音声は流れません）</p>
            <video className="mx-auto" src={eyeInputKeyboardVideo} autoPlay loop></video>
          </div>
        </div>
        <WorkAward work={work}/>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Sotsuken;