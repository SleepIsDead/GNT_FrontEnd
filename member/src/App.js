import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layouts from './layouts/layouts';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts/>}>
        
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
