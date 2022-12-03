import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import mimamoriDetail1 from '../../../../public/images/mimamoriDetail1.png'
import mimamoriDetail2 from '../../../../public/images/mimamoriDetail2.png'
import mimamoriDetail3 from '../../../../public/images/mimamoriDetail3.png'
import {Accordion as FlowbiteAccordion } from 'flowbite-react';

function SCSKHackathon() {
  const work = workList[6]

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
              <img className="mx-auto" src={mimamoriDetail1}></img>
              <img className="mx-auto" src={mimamoriDetail2}></img>
              <img className="mx-auto" src={mimamoriDetail3}></img>
            </FlowbiteAccordion.Content>
          </FlowbiteAccordion.Panel>
        </FlowbiteAccordion>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default SCSKHackathon;