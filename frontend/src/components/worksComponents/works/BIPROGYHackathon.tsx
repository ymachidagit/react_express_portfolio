import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import {Accordion as FlowbiteAccordion } from 'flowbite-react';
import dokuon from '../../../../public/images/dokuon.png'
import dokuonsearch from '../../../../public/images/dokuonsearch.png'
import dokuonSystem from '../../../../public/images/dokuonSystem.png'


const BIPROGYHackathon = () => {

  const work = workList[7]

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
              <div className="mx-auto">
                <img src={dokuonSystem}></img>
                <p className="text-center mb-3">システム構成図</p>
                <img src={dokuon}></img>
                <p className="text-center mb-3">アプリ画面</p>
                <img src={dokuonsearch}></img>
                <p className="text-center">検索機能</p>
              </div>
            </FlowbiteAccordion.Content>
          </FlowbiteAccordion.Panel>
        </FlowbiteAccordion>
        <Footer></Footer>
      </div>
    </div>
  )
}
export default BIPROGYHackathon;