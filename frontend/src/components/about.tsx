import Header from './commonLayouts/header';
import Footer from './commonLayouts/footer';
import Profile from './profile';
import nozokimiman from '../../public/images/nozokimi_man.png'

function About() {
  return(
    <div>
      <Header></Header>
      <div className="container mx-auto flex flex-wrap p-10 flex-col bg-green-200">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 inline mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About</h1>
            <div className="h-1 w-full bg-indigo-500 rounded"></div>
          </div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed flex flex-wrap mb-10 text-gray-500">自己紹介</p>
        <div className="flex flex-row mb-20">
          <div>
            <img src={nozokimiman}/>
          </div>
          <div>
            <div className="w-full mb-6 lg:mb-0">
              <div className="flex flex-row">
                <div className="mr-10 inline">
                  <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">氏名</h1>
                  <div className="h-1 bg-indigo-500 rounded mb-2 w-full"></div>
                  <h1 className="sm:text-xl text-xm font-medium title-font mb-2 ml-5 text-gray-900">{Profile.name}</h1>
                </div>
                <div className="inline">
                  <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">生年月日</h1>
                  <div className="h-1 bg-indigo-500 rounded mb-2 w-full"></div>
                  <h1 className="sm:text-xl text-xm font-medium title-font mb-2 ml-5 text-gray-900">{Profile.birthDate}</h1>
                </div>
              </div>
              <div className="inline">
                <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">所属</h1>
                <div className="h-1 bg-indigo-500 rounded mb-2 w-full"></div>
                <h1 className="sm:text-xl text-xm font-medium title-font mb-2 ml-5 text-gray-900">{Profile.master}<br/>{Profile.lab}</h1>
              </div>
              <div className="inline">
                <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">経歴</h1>
                <div className="h-1 bg-indigo-500 rounded mb-2 w-full"></div>
                <h1 className="sm:text-xl text-xm font-medium title-font mb-2 ml-5 text-gray-900">出身高校：{Profile.highSchool}<br/>出身大学：{Profile.bachelor}</h1>
              </div>
              <div className="inline">
                <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">資格</h1>
                <div className="h-1 bg-indigo-500 rounded mb-2 w-full"></div>
                <h1 className="sm:text-xl text-xm font-medium title-font mb-2 ml-5 text-gray-900">{Profile.TOEIC}<br/>{Profile.qualification}</h1>
              </div>
              <div className="inline">
                <div className="flex flex-row">
                <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 mr-10 text-gray-900">スキルセット</h1>
                <h1 className="sm:text-xl text-xm font-medium mb-2 text-gray-900">※( )は少し触れた程度</h1>
                </div>
                <div className="h-1 bg-indigo-500 rounded mb-2 w-full"></div>
                <h1 className="sm:text-xl text-xm font-medium title-font mb-2 ml-5 text-gray-900">
                  言語：{Profile.skillSetLanguage}<br/>フロントエンド：{Profile.skillSetFrontend}, {Profile.skillSetCSS}<br/>バックエンド：{Profile.skillSetBackend}<br/>クラウドサービス：{Profile.skillSetCloud}<br/>その他：{Profile.skillSetOther}
                </h1>
              </div>
            </div>
          </div>
        </div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default About;