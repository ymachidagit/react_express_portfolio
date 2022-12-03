import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import librarianDetail1 from '../../../../public/images/librarianDetail1.png'
import librarianDetail2 from '../../../../public/images/librarianDetail2.png'
import librarianDetail3 from '../../../../public/images/librarianDetail3.png'
import librarianDetail4 from '../../../../public/images/librarianDetail4.png'
import librarianDetail5 from '../../../../public/images/librarianDetail5.png'
import librarianDetail6 from '../../../../public/images/librarianDetail6.png'
import {Accordion as FlowbiteAccordion } from 'flowbite-react';

function IngageIntern() {
  const work = workList[5]

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
            </FlowbiteAccordion.Content>
          </FlowbiteAccordion.Panel>
        </FlowbiteAccordion>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default IngageIntern;