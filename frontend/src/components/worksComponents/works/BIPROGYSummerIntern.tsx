import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import '../commonLayouts/workTab.css'
import contactBookDetail1 from '../../../../public/images/contactBookDetail1.png'
import contactBookDetail2 from '../../../../public/images/contactBookDetail2.png'
import contactBookDetail3 from '../../../../public/images/contactBookDetail3.png'

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
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-detail" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-detail">詳細</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <img className="mx-auto" src={contactBookDetail1}></img>
            <p className="text-center mb-5">保護者用連絡帳記入フォーム</p>
            <img className="mx-auto" src={contactBookDetail2}></img>
            <p className="text-center mb-5">園児一覧画面</p>
            <img className="mx-auto" src={contactBookDetail3}></img>
            <p className="text-center">保育士用連絡帳返信フォーム</p>
          </div>
        </div>
        <WorkAward work={work}/>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default BIPROGYSummerIntern;