import logo from './logo.svg';
import bootstap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavScroll from './Components/Navmenu/MyNavbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Client_testimonials from './Components/Service/Clienttestimonials/Client_testimonials';
import Learning from './Components/Service/Learning/Learning';
import Ourservice from './Components/Service/Ourservice/Ourservice';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavScroll/>
       <Routes>
        <Route path='/' element={<h2>hello</h2>}/>
        <Route path='/aboutus' element={<h2>About Us</h2>}/>
        <Route path='/service' element={<h2>Service</h2>}/>
        <Route path='/clienttestimonials' element={<Client_testimonials/>}/>
        <Route path='/learning' element={<Learning/>}/>
        <Route path='/ourservice' element={<Ourservice/>}/>
        <Route path='/contactus' element={<h2>Contact us</h2>}/>
        <Route path='/gallery' element={<h2>Gallery</h2>}/>
        <Route path='/gallery-1' element={<h2>Gallery-1</h2>}/>
        <Route path='/gallery-2' element={<h2>Gallery-2</h2>}/>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
