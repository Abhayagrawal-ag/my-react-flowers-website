import React, { useState } from 'react'
import {toast} from "react-toastify";
import {  useNavigate, useSearchParams } from 'react-router-dom'
function Contact(){
  const [name,setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail]= useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [show , setShow] = useState(false)
  const [text , setText] = useState("")
  const navigate = useNavigate()
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  const handleSubmit=()=>{
    if(name=="" || lastName=="" || message=="" || subject=="" || email==""){
      setShow(true)
      setText("Enter all Details!")
      toast.error("Details incomplete!")
    }
    else if(!validateEmail(email)){
      setShow(true)
      setText("invalid Email")
      toast.error("invalid Email format! Please enter a valid Email")
    }
    else{
      setShow(true)
      toast.success("Order Successfull")
    }
  }
  setTimeout(()=>{
    setText("")
  },3000)
  return(
    <div className='cntct'>
      <div className='cntct1'>Welcome to Flower's Shop</div>
      <div className='cntct2'>Contact Us</div>
      <br></br>
      <br></br>
      <div className='cntct3'>
        <div className='cntct4 '>
          <h4 className='cntct7'>Contact Information</h4>
          <h6 className='cntct8'>Fill up the form and our team will get back to you within 24 hours</h6>
          <div className='cntct9'>
            <a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeZLP9-XKEaRXjRo9u-b--hwZ-9ZFX5GBqM38gyk0RzvFOExtbYDP_qoaXXEwEUByKb7GgJKccpAQg&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-415526819%3A1735235107288132&ddm=1'><img className='cntct10' src='https://cdn-icons-png.freepik.com/256/888/888853.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid'></img></a>
            <h6 className='cntct11'>imabhay@gmail.com</h6>
          </div>
          <div className='cntct12'>
            <img className='cntct13' src='https://cdn-icons-png.flaticon.com/128/16749/16749931.png'></img>
            <h6 className='cntct14'>8269223882</h6>
          </div>
          <div className='cntct15'>
            <a href='https://www.google.com/maps/place/KHUSHI+TVS/@24.9275595,78.9791691,10z/data=!4m10!1m2!2m1!1stvs+agency,lavkushnagar+district+chhatarpur+m!3m6!1s0x3982bd7314518451:0x28806c31d1389806!8m2!3d24.9275595!4d79.5889103!15sCi10dnMgYWdlbmN5LGxhdmt1c2huYWdhciBkaXN0cmljdCBjaGhhdGFycHVyIG0iA4gBAZIBF2hvbWVfYXV0b21hdGlvbl9jb21wYW554AEA!16s%2Fg%2F11fcnld8t8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D'><img className='cntct16'src='https://cdn-icons-png.flaticon.com/128/9062/9062564.png'></img></a>
            <h6 className='cntct17'>123,Near TVS agency,Laundi</h6>
          </div>
          <br></br>
          <div className='cntct18'>
            <a href='https://www.facebook.com/'><img className='cntct19'  src='https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid'></img></a>
            <a href='https://www.instagram.com/'><img className='cntct20'src='https://cdn-icons-png.freepik.com/256/2111/2111463.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid'></img></a>
            <a href='https://web.whatsapp.com/'>
            <img className='cntct21' src='https://cdn-icons-png.freepik.com/256/15713/15713434.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid'></img></a>
            <a href='https://www.snapchat.com/'><img className='cntct22' src='https://img.icons8.com/?size=80&id=XFi9PGTaqhtK&format=png'></img></a>
            
          </div>
        </div>
        <div className='cntct5'>
          <h2 className='cntct26'>Custom Order</h2>
          <input className='cntct23' type='text' placeholder='First Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <input className='cntct24' type='text' placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
          <input className='cntct25' type='text' placeholder='Email Adress' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <input className='cntct27' type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
          <input  className='cntct28'type='text' placeholder='Your Message' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
          {
            show?<div className='detail'>{text}</div>:null
          }
          <button className='form' onClick={handleSubmit}>Submit Form</button>
        </div>
      </div>
      <button className='goback2' onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}
export default Contact