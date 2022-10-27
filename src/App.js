// import { BrowserRouter, Routes, Route} from 'reac-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='services' element={<Services />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
