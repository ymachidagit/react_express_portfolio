import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import eyeInputKeyboardVideo from '../../../../public/videos/eyeInputKeyboardVideo.mp4'
import {Accordion as FlowbiteAccordion } from 'flowbite-react';

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
        <WorkAward work={work}/>
        <FlowbiteAccordion alwaysOpen={true}>
          <FlowbiteAccordion.Panel>
            <FlowbiteAccordion.Title className="bg-green-300 hover:bg-green-100 sm:text-xl text-xm font-medium title-font cursor-pointer pr-3">
              {'詳細'}
            </FlowbiteAccordion.Title>
            <FlowbiteAccordion.Content>
              <p className="">・使用ツール：HoloLens2</p>
              <p className="">・注視点にカーソルを表示<br/>・注視しているキーの色を赤くする視覚フィードバック<br/>・入力確定時のビープ音による音声フィードバック（動画では音声は流れません）</p>
              <video className="mx-auto" src={eyeInputKeyboardVideo} autoPlay loop></video>
            </FlowbiteAccordion.Content>
          </FlowbiteAccordion.Panel>
        </FlowbiteAccordion>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Sotsuken;