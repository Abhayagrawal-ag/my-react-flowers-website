import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Gallery from './Gallery'
function Home(){
  const navigate = useNavigate()
  return(
    <div className='body'>
       <h1 className='box'>
        <h1 className='home'><button type="button" class="btn btn-secondary btn-md">HOME</  button></h1>
        <NavLink to='/about'>
        <h1 className='about'><button type="button" class="btn btn-secondary btn-md">ABOUT</button></h1>
        </NavLink>
        <NavLink to='/gallery'>
        <h1 className='gallery'><button type="button" class="btn btn-secondary btn-md">GALLERY</button></h1>
        </NavLink>
        <NavLink to='/faq'>
        <h1 className='faq'><button type="button" class="btn btn-secondary btn-md">FAQ</button></h1>
        </NavLink>
        <NavLink to='/contact'>
        <h1  className='contact-us'><button type="button" class="btn btn-secondary btn-md">CONTACT us</button></h1>
        </NavLink>
        <NavLink to='/payment'>
        <h1  className='payment'><button type="button" class="btn btn-secondary btn-md">PAYMENT</button></h1>
        </NavLink>
        <div className='items'>
          <img className='heart' src='https://cdn-icons-png.flaticon.com/128/535/535234.png'></img>
          <img onClick={()=>navigate('./cart')} className='cart' src='https://cdn-icons-png.freepik.com/256/9376/9376776.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid'></img>
          <img className='admin' src='https://cdn-icons-png.flaticon.com/128/2206/2206368.png'></img>
          <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search"></input>
        </div>
       </h1>
       <div>
        <h1 className='memory'>Flowers Make Memories!</h1>
        <h6 className='discription'>Flowers are one of the most beautiful gifts given to us by nature.
        </h6>
        <p className='order'><button onClick={()=> navigate('./Gallery')} type="button" class="btn btn-secondary btn-lg">Shop Now</button></p>
        </div>
    </div>
  )
}
export default Home