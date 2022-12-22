import About from '../components/about';
import Works from '../components/works';
import Sotsuken from '../components/worksComponents/works/sotsuken';
import BIPROGYDXHACK from '../components/worksComponents/works/BIPROGYDXHACK';
import KDGHACKS from '../components/worksComponents/works/KDGHACKS';
import YtvHackathon from '../components/worksComponents/works/ytvHackathon';
import IngageIntern from '../components/worksComponents/works/IngageIntern';
import BIPROGYSummerIntern from '../components/worksComponents/works/BIPROGYSummerIntern';
import SCSKHackathon from '../components/worksComponents/works/SCSKHackathon';
import BIPROGYHackathon from '../components/worksComponents/works/BIPROGYHackathon';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';

function Routing() {
  return(
    <BrowserRouter basename="/react_express_portfolio/">
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/works" element={<Works />}/>
        <Route path="/works/sotsuken" element={<Sotsuken />}/>
        <Route path="/works/hackathon1" element={<BIPROGYDXHACK />}/>
        <Route path="/works/hackathon2" element={<KDGHACKS />}/>
        <Route path="/works/hackathon3" element={<YtvHackathon />}/>
        <Route path="/works/intern1" element={<BIPROGYSummerIntern />}/>
        <Route path="/works/intern2" element={<IngageIntern />}/>
        <Route path="/works/hackathon4" element={<SCSKHackathon />}/>
        <Route path="/works/hackathon5" element={<BIPROGYHackathon />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;