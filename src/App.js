import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Beranda from './components/Beranda';
import Artikel from "./components/Artikel";
import Kampanye from "./components/Kampanye";
import Program from "./components/Program";
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/artikel' element={<Artikel />} />
        <Route path='/kampanye' element={<Kampanye />} />
        <Route path='/program' element={<Program />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
