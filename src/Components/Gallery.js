import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from './Cart'
// import { useNavigate } from 'react-router-dom'
function Gallery(){
  const[visible, setVisible]= useState(false)
  const navigate = useNavigate()
  return(
    <div className='Gllry'>
      <div className='Gllry1'>Latest Products</div>
      <div className='Gllry2'>
        <h1 className='image1'><img  onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:TWR04-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TWR04-1A/MakeMerrybyTeleflora' height={'170px'} width={'170px'}></img></h1>
        <h1 ><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:TWR16-7A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TWR16-7A/Teleflora' height={'170px'} width={'170px'}></img></h1>
        <h1 ><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:TEV72-5A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TEV72-5A/Teleflora' height={'170px'} width={'170px'}></img></h1>
        <h1 ><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:TBC06-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TBC06-1A/YourWishIsGrantedBirthdayCakeBouquet' height={'170px'} width={'170px'}></img></h1>
        <h1><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:T24M410A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T24M410A/Teleflora' height={'170px'} width={'170px'}></img></h1>
      </div>
      <div className='Gllry3'>
        <h4 className='Gllry4'><p>Flower Pot($399.99)</p></h4>
        <h4 className='Gllry5'><p>Flower Pot($799.99)</p></h4>
        <h4 className='Gllry6'><p>Flower Pot($599.99)</p></h4>
        <h4 className='Gllry7'><p>Flower Pot($899.79)</p></h4>
        <h4 className='Gllry8'><p>Flower Pot($1099.89)</p></h4>
      </div>
      <div className='Gllry9'>
        <h1><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:T46-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T46-1A/HowSweetItIs' height={'170px'} width={'170px'}></img></h1>
        <h1><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:TWR16-1A,pg_6/w_160,h_200,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TWR16-1A/TeleflorasFa-fa-fabulousBouquet'></img></h1>
        <h1><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:T24X300A,pg_6/w_160,h_200,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T24X300A/Teleflora'></img></h1>
        <h1><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:TBC03-1A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/TBC03-1A/Teleflora'  height={'170px'} width={'170px'}></img></h1>
        <h1><img onClick={()=> setVisible(true)} src='https://img.teleflora.com/images/o_0/l_flowers:T120-2A,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/flowers/T120-2A/TannenbaumBasket' height={'170px'} width={'170px'}></img></h1>
      </div>
      <div className='Gllry10'>
        <h4 className='Gllry11'><p>Flower Pot($1199.99)</p></h4>
        <h4 className='Gllry12'><p>Flower Pot($1299.99)</p></h4>
        <h4 className='Gllry13'><p>Flower Pot($999.99)</p></h4>
        <h4 className='Gllry14'><p>Flower Pot($1399.79)</p></h4>
        <h4 className='Gllry15'><p>Flower Pot($899.89)</p></h4>
      </div>
     {
      visible? <div className='Gllry16'> 
      <h4 className='Gllry18'>CART</h4>
      <button onClick={()=>navigate('./cart')}  className='Gllry17'>Add to Cart</button>
      </div> :null
     }
    </div>
  )
}
export default Gallery