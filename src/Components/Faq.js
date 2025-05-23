
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
function Faq(){
  const navigate = useNavigate()
  return(
   <div>
    <div className='faq1'>
      <div className='faq2'>
        <div className='faq3'>
          <img src='https://cdn3.iconfinder.com/data/icons/charts-and-diagrams-v2/64/colors_comparison_compare-128.png' height={'50px'} width={'50px'}></img>
          <img src='https://cdn-icons-png.flaticon.com/128/5726/5726489.png' height={'60px'} width={'60px'}></img>
        </div>
        <div className='faq4'>
          <img src='https://cdn-icons-png.flaticon.com/128/4002/4002617.png'></img>
          <div className='faq5'>
            <img className='faq6' src='https://cdn-icons-png.flaticon.com/128/2058/2058146.png'></img>
            <ul className='faq7'> (1) What is a flower garden?
              <li className='faq8'>A flower garden is a space dedicated to cultivating.</li>
              <li className='faq9'> It also known as floriculturing or landscaping.</li>
              <li className='faq10'>Flowers are one of the most ubiquitous and beloved aspects of nature</li>
              <li className='faq11'>flowers have captivated human imagination for centuries.</li>
            </ul>
            <ul className='faq12'> (2) Can We Gift Flowers To Men?
              <li className='faq13'>Flowers are an inexpensive way of bestowing your love and expressing emotions.</li>
              <li className='faq14'>There is no such reason that flowers are solely reserved for women. </li>
              <li className='faq15'>When men send a woman flowers, it is to express their love and earnest emotions towards her.</li> 
            </ul>
          </div>
        </div>
        <button className='faq16' onClick={()=>navigate(-1)}>Go back</button>
      </div>
    </div>
   </div> 
  )
}
export default Faq