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
  return(
    <BrowserRouter basename="/react_express_portfolio/">
      <Routes>
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