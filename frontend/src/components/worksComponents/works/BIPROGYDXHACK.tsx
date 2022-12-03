import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import ukagaukun1 from '../../../../public/images/ukagaukun1.png'
import ukagaukun2 from '../../../../public/images/ukagaukun2.png'
import {Accordion as FlowbiteAccordion } from 'flowbite-react';


const BIPROGYDXHACK = () => {

  const work = workList[1]

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
              <img className="mx-auto" src={ukagaukun1}></img>
              <img className="mx-auto" src={ukagaukun2}></img>
            </FlowbiteAccordion.Content>
          </FlowbiteAccordion.Panel>
        </FlowbiteAccordion>
        <Footer></Footer>
      </div>
    </div>
  )
}
export default BIPROGYDXHACK;