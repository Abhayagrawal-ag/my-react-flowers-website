import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Payment(){
  const navigate = useNavigate()
  const [card , setCard] = useState("")
  const [month,setMonth] = useState("")
  const[cvc, setCvc]= useState("")
  const[nick, setNick] = useState("")
  const handleSubmit=()=>{
    if(card=="" || month=="" || cvc=="" ){
      toast.error("Details incomplete")
    }
    else if(!/^\d{16}$/.test(card)){
      toast.error("Invalid card number! It must be 16 digits.")

    }
    else if(!/^\d{3}$/.test(cvc)){
      toast.error("Invalid CVC number")
    }
    else{
      toast.success("Added succesfully")

    }
  }
  const Cash=()=>{
    toast.success("Pay cash")
  }
  const EMI=()=>{
    toast.success("Pay with EMI also")
  }
  const UPI=()=>{
    toast.success("Pay through UPI id")
  }
  const creditcard=()=>{
    toast.success("Credit card is added Successfully")
  }
  const payment=()=>{
    toast.success("Payment Successful")
  }
  const netbanking=()=>{
    toast.success("Pay through NetBanking")
  }
  return (
    <div className='pymnt'>
      <div className='payment1'>
        <div className='payment2'>
          <div className='payment3'>
            <img className='payment4' src='https://cdn-icons-png.flaticon.com/128/5822/5822063.png'></img>
            <div className='payment5'>
              <img src='https://cdn-icons-png.flaticon.com/128/196/196578.png' height={'50px'} width={'50px'}></img>
              <img src='https://cdn-icons-png.flaticon.com/128/196/196566.png' height={'50px'} width={'50px'}></img>
              <img src='https://cdn-icons-png.flaticon.com/128/14082/14082959.png' height={'50px'} width={'50px'}></img> 
            </div>
            <h6 className='payment6'>CARD NUMBER</h6>
            <input className='payment7' type='text' placeholder='0000-0000-0000-0000' value={card} onChange={(e)=>setCard(e.target.value)}></input>
            <div className='payment15'>
              <h6 className='payment11'>EXPIRY DATE</h6>
              <h6 className='payment16'>CVC</h6>
            </div>
            <div className='payment8'>
              <input className='payment9' type='date' placeholder='' value={month} onChange={(e)=>setMonth(e.target.value)} ></input>
              <input className='payment10' type='text' placeholder='CVC' value={cvc} onChange={(e)=>setCvc(e.target.value)}></input>
            </div>
            <input className='payment12' type='text' placeholder='Add a nickname (optional)' value={nick} onChange={(e)=>setNick(e.target.value)} ></input>
            <div className='payment13'><h7>Eg. Shopping card, Dad's card</h7></div>
            <div><button onClick={handleSubmit} className='payment14'>ADD</button></div>
          </div>
        </div>
        <div className='pymnt1'>
        <div className='pymnt2'>
          <div><img className='pymnt3'src='https://cdn-icons-png.freepik.com/256/6384/6384928.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid' height={'100px'} width={'100px'}></img></div>
          <h2>JS checkout</h2>
        </div>
        <h7 className='pymnt4'>checkout Page Customization</h7>
        <div className='pymnt5'>    
          <div className='pymnt6'>
            <div className='pymnt7'>
              <img src='https://cdn-icons-png.flaticon.com/128/4108/4108042.png' height={'45px'} width={'45px'}></img>
              <h5 style={{color:'white'}}>RR Enterprises</h5>
            </div>
            <br></br>
            <div className='pymnt8'>
              <h5 style={{color:'white'}} >Amount to be Paid</h5>
              <h5 style={{color:'white'}} >$899.99</h5>
            </div>
          </div>
          <div className='pymnt9'>
            <img src='https://cdn-icons-png.flaticon.com/128/726/726488.png' height={'45px'} width={'45px'}></img>
            <img src='https://cdn-icons-png.flaticon.com/128/10238/10238503.png' height={'40px'} width={'40px'}></img>
            <h4>Pay Wallet</h4>
          </div>
          <br></br>
          <button className='pymnt10' onClick={payment}>Pay $899.99</button>
          <br></br>
          <br></br>
          <h6 className='pymnt11'>Other Payment Mode</h6>
          <div className='pymnt12'>
            <div><img src='https://cdn-icons-png.freepik.com/256/8983/8983163.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid' height={'30px'} width={'30px'}></img></div>
            <div><input onClick={creditcard} type='checkbox' ></input></div>
            <div><h5> Credit Card</h5></div>
          </div>
         <br></br>
          <div className='pymnt13'>
            <div><img src='https://cdn-icons-png.freepik.com/256/13384/13384452.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid' height={'30px'} width={'30px'}></img></div>
            <div><input onClick={netbanking} type='checkbox'></input></div>
            <div><h5>Net Banking</h5></div>
          </div>
          <br></br>
          <div className='pymnt14'>
            <div><img src='https://cdn.icon-icons.com/icons2/2699/PNG/96/upi_logo_icon_169316.png' height={'30px'} width={'30px'}></img></div>
            <div><input onClick={UPI} type='checkbox'></input></div>
            <div><h5>Upi Payment</h5></div>
          </div>
         <br></br>
         <div className='pymnt15'>
          <div><img src='https://cdn-icons-png.freepik.com/256/2856/2856889.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid' height={'30px'} width={'30px'}></img></div>
          <div><input onClick={EMI} type='checkbox'></input></div>
          <div><h5>Pay via EMIs</h5></div>
          </div>
          <br></br>
          <div className='pymnt16'>
            <div><img src='https://cdn-icons-png.freepik.com/256/8426/8426615.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid' height={'30px'} width={'30px'}></img></div>
            <div><input onClick={Cash} type='checkbox'></input></div>
            <div><h5>Cash delevery</h5></div>
          </div>
        </div>   
      </div>
      </div>
      {/* <button  className='goback4' onClick={()=>navigate(-1)}>Go Back</button> */}
    </div>
  )
}
export default Payment