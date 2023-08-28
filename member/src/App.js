import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import GoogleMap from './layouts/GoogleMap';
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
          </Routes>
    </BrowserRouter>
  );
}

export default App;
