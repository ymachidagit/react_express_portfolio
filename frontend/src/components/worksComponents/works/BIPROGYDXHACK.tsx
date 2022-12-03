import Header from '../../commonLayouts/header';
import Footer from '../../commonLayouts/footer';
import workList from '../../worksComponents/worksList';
import {WorkTitle, WorkAbstract, WorkMotive, WorkPurpose, WorkTeckStack, WorkMyRole, WorkAward} from '../commonLayouts/workTemplate';
import '../commonLayouts/workTab.css'
import ukagaukun1 from '../../../../public/images/ukagaukun1.png'
import ukagaukun2 from '../../../../public/images/ukagaukun2.png'


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
        <div className="tab w-full overflow-hidden border-t">
          <input className="absolute opacity-0 " id="tab-multi-detail" type="checkbox" name="tabs"/>
          <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-detail">詳細</label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
            <img className="mx-auto" src={ukagaukun1}></img>
            <img className="mx-auto" src={ukagaukun2}></img>
          </div>
        </div>
        <WorkAward work={work}/>
        <Footer></Footer>
      </div>
    </div>
  )
}
// function BIPROGYDXHACK() {
//   const work = workList[1]

//   return(
//     <div>
//       <Header></Header>
//       <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
//         <div className="flex flex-wrap w-full mb-3">
//           <div className="inline mb-6 lg:mb-0">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{work.title}</h1>
//             <div className="h-1 w-full bg-indigo-500 rounded"></div>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-1" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-1">開発の経緯</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <p className="p-5">{work.motive}</p>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-2" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-2">概要</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <p className="p-5">{work.abstract}</p>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-3" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-3">開発の目的</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <p className="p-5">{work.purpose}</p>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-4" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-4">技術スタック</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <p className="p-5">{work.techStack}</p>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-detail" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-detail">詳細</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <img className="mx-auto" src={ukagaukun1}></img>
//             <img className="mx-auto" src={ukagaukun2}></img>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-5" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-5">自分の役割</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <p className="p-5">{work.myRole}</p>
//           </div>
//         </div>
//         <div className="tab w-full overflow-hidden border-t">
//           <input className="absolute opacity-0 " id="tab-multi-6" type="checkbox" name="tabs"/>
//           <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor="tab-multi-6">賞</label>
//           <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
//             <p className="p-5">{work.award}</p>
//           </div>
//         </div>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

export default BIPROGYDXHACK;