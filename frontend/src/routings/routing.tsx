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
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="About" element={<About />}/>
                    <Route path="Works" element={<Works />} />
                    <Route path="Works/Sotsuken" element={<Sotsuken />} />
                    <Route path="Works/BIPROGYDXHACK" element={<BIPROGYDXHACK />} />
                    <Route path="Works/KDGHACKS" element={<KDGHACKS />} />
                    <Route path="Works/BIPROGYSummerIntern" element={<BIPROGYSummerIntern />} />
                    <Route path="Works/YtvHackathon" element={<YtvHackathon />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Routing;