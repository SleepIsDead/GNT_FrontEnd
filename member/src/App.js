import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import GoogleMap from './layouts/GoogleMap';
import QNAInsert from './layouts/QNAInsert';
import QNAList from './layouts/QNAList';
import QNAView from './layouts/QNAView';
import KakaoLogin from './pages/KakaoLogin';
import MyPlanList from './pages/MyPlanList';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts/>}/>
            <Route path="/kakaoLogin" element={<KakaoLogin/>}/>
            <Route path="/myplanList" element={<MyPlanList/>}/>
            <Route path="/googlemap" element={<GoogleMap/>}/>
            <Route path="/QNAList" element={<QNAList/>}/>
            <Route path="/QNAInsert" element={<QNAInsert/>}/>
            <Route path="/QNAView/:no" element={<QNAView/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
