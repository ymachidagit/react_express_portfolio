import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import contactBookDetail1 from '../../../../public/images/contactBookDetail1.png'
import contactBookDetail2 from '../../../../public/images/contactBookDetail2.png'
import contactBookDetail3 from '../../../../public/images/contactBookDetail3.png'
import {Accordion as FlowbiteAccordion } from 'flowbite-react';

function BIPROGYSummerIntern() {
  const work = workList[4]
  
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
              <img className="mx-auto" src={contactBookDetail1}></img>
              <p className="text-center mb-5">保護者用連絡帳記入フォーム</p>
              <img className="mx-auto" src={contactBookDetail2}></img>
              <p className="text-center mb-5">園児一覧画面</p>
              <img className="mx-auto" src={contactBookDetail3}></img>
              <p className="text-center">保育士用連絡帳返信フォーム</p>
            </FlowbiteAccordion.Content>
          </FlowbiteAccordion.Panel>
        </FlowbiteAccordion>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default BIPROGYSummerIntern;