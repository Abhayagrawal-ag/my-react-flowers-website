import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Faq from './Components/Faq';
import Payment from './Components/Payment';
import Cart from './Components/Cart';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/cart' element={<Cart/>}/> 
      </Routes>
    </div>
  )
}
export default App;
