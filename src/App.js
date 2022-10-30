// import { BrowserRouter, Routes, Route, Link} from 'reac-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import serviceDetails from './data/serviceDetails'
import Service from './components/pages/Service'
function App() {

  return (


    <BrowserRouter>
    <nav>
      <Link to='/'>go to home page</Link>
      <Link to='/services'>see our services</Link>
      <Link to='/contact'>contect us</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='services' element={<Services  servicesArr={serviceDetails}  />} />
      <Route path='/services/:id' element={<Service services={serviceDetails} /> }/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
