import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import '../commonLayouts/workTab.css'
import mimamoriDetail1 from '../../../../public/images/mimamoriDetail1.png'
import mimamoriDetail2 from '../../../../public/images/mimamoriDetail2.png'
import mimamoriDetail3 from '../../../../public/images/mimamoriDetail3.png'

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
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-detail" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-detail">詳細</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <img className="mx-auto" src={mimamoriDetail1}></img>
            <img className="mx-auto" src={mimamoriDetail2}></img>
            <img className="mx-auto" src={mimamoriDetail3}></img>
          </div>
        </div>
        <WorkAward work={work}/>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default SCSKHackathon;