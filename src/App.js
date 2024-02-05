import MedicalServices from './MedicalServices';
import Therapy from './Therapy';
import Landpage from './Landpage/Landpage';
import FooterPage from './Landpage/FooterPage';
import LandNav from './Landpage/LandNav';
import Login from './Landpage/Login';
import Register from './Landpage/Register';
import Doctorregistration from './Doctorregistation';
import Payment from './Landpage/Payment';
import Technician from './Technician';
import Tsendreports from './Tsendreports';
import Doctorlandpage from './Doctorlandpage';
import Technicianlandpage from './Technicianlandpage';
import Technicianregistration from './Technicianregistration';
import Technicianafterlogin from './Technicainafterlogin';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



function App() {
  return (
  
    
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Landpage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Landpage' element={<Landpage/>}/>
        <Route path='/Register' element={<Register/>}/>        
        <Route path='/MedicalServices' element={<MedicalServices/>}/>
        <Route path='/Therapy' element={<Therapy/>}/>
        <Route path='/Doctorregistration' element={<Doctorregistration/>}/>
        <Route path='/FooterPage' element={<FooterPage/>}/>
        <Route path='/LandNav' element={<LandNav/>}/>
        <Route path='/Technician' element={<Technician/>}></Route>
        <Route path='/Therapy/Payment' element={<Payment/>}/>
        <Route path='/Tsendreports' element={<Tsendreports/>}/>
        <Route path='/Doctorlandpage' element={<Doctorlandpage/>}></Route>
        <Route path='/TechnicianRegistration' element={<Technicianregistration/>}/>
        <Route path='/Technicianlandpage' element={<Technicianlandpage/>}/>
        <Route path='/Technicianafterlogin' element={<Technicianafterlogin/>}/>
        

      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
