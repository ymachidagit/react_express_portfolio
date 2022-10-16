import Home from '../components/home';
import About from '../components/about';
import Works from '../components/works';
import Sotsuken from '../components/worksComponents/works/sotsuken';
import BIPROGYDXHACK from '../components/worksComponents/works/BIPROGYDXHACK';
import KDGHACKS from '../components/worksComponents/works/KDGHACKS';
import YtvHackathon from '../components/worksComponents/works/ytvHackathon';
import IngageIntern from '../components/worksComponents/works/IngageIntern';
import BIPROGYSummerIntern from '../components/worksComponents/works/BIPROGYSummerIntern';
import SCSKHackathon from '../components/worksComponents/works/SCSKHackathon';
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
        <Route path="/works/ytvHackathon" element={<YtvHackathon />}/>
        <Route path="/works/IngageIntern" element={<IngageIntern />}/>
        <Route path="/works/BIPROGYSummerIntern" element={<BIPROGYSummerIntern />}/>
        <Route path="/works/SCSKHackathon" element={<SCSKHackathon />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;