import Home from '../components/home';
import About from '../components/about';
import Works from '../components/works';
import Sotsuken from '../components/worksComponents/works/sotsuken';
import BIPROGYDXHACK from '../components/worksComponents/works/BIPROGYDXHACK';
import KDGHACKS from '../components/worksComponents/works/KDGHACKS';
import BIPROGYSummerIntern from '../components/worksComponents/works/BIPROGYSummerIntern';
import YtvHackathon from '../components/worksComponents/works/ytvHackathon';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';

function Routing() {
  // const basePath = "react_express_portfolio"
  return(
    <BrowserRouter basename="/react_express_portfolio/">
      <Routes>
        {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
        <Route path={`${process.env.PUBLIC_URL}/About`} element={<About />}/>
        <Route path={`${process.env.PUBLIC_URL}/Works`} element={<Works />} />
        <Route path={`${process.env.PUBLIC_URL}/Works/Sotsuken`} element={<Sotsuken />} />
        <Route path={`${process.env.PUBLIC_URL}/Works/BIPROGYDXHACK`} element={<BIPROGYDXHACK />} />
        <Route path={`${process.env.PUBLIC_URL}/Works/KDGHACKS`} element={<KDGHACKS />} />
        <Route path={`${process.env.PUBLIC_URL}/Works/BIPROGYSummerIntern`} element={<BIPROGYSummerIntern />} />
        <Route path={`${process.env.PUBLIC_URL}/Works/YtvHackathon`} element={<YtvHackathon />} /> */}
        {/* <Route path={`${basePath}/`} element={<Home />}/>
        <Route path={`${basePath}/about`} element={<About />}/>
        <Route path={`${basePath}/works`} element={<Works />} />
        <Route path={`${basePath}/works/sotsuken`} element={<Sotsuken />} />
        <Route path={`${basePath}/works/BIPROGYDXHACK`} element={<BIPROGYDXHACK />} />
        <Route path={`${basePath}/works/KDGHACKS`} element={<KDGHACKS />} />
        <Route path={`${basePath}/works/BIPROGYSummerIntern`} element={<BIPROGYSummerIntern />} />
        <Route path={`${basePath}/works/ytvHackathon`} element={<YtvHackathon />} /> */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/works" element={<Works />}/>
        <Route path="/works/sotsuken" element={<Sotsuken />}/>
        <Route path="/works/BIPROGYDXHACK" element={<BIPROGYDXHACK />}/>
        <Route path="/works/KDGHACKS" element={<KDGHACKS />}/>
        <Route path="/works/BIPROGYSummerIntern" element={<BIPROGYSummerIntern />}/>
        <Route path="/works/ytvHackathon" element={<YtvHackathon />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;