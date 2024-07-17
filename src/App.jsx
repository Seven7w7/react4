import './App.css'
import Home from './Components/Pages/Home/Home'
import ContadorClics from './Components/Pages/ContadorClics/ContadorClics'
import DigitalClock from './Components/Pages/DigitalClock/DigitalClock'
import  Timer  from './Components/Pages/Timer/Timer'
import  UserActive  from './Components/Pages/UserActive/UserActive'
import { NotFound } from './Components/Pages/NotFound/NotFound'
import {Routes,Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contador" element={<ContadorClics/>} />
        <Route path="/Digital" element={<DigitalClock />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/UserActive" element={<UserActive />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App