import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';
function About(){
  const [text, setText] = useState("")
  const [name, setName]= useState("")
  const [password, setPassword] = useState("")
  const[show, setShow]= useState(false)
  const Navigate= useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name ==="abhay" && password==="agrawal123"){
      setShow(true)
      toast.success("login successfull")
    }
    else if(name=== "" && password===""){
      setShow(true)
      setText("Please Enter details")
      toast.error("Details imcomplete")
    }
    else{
      if(password.trim().length < 8){
        setShow(true)
        toast.error("Password must have atleast of 8 characters")
      }
      else{
        setShow(true)
        setText("Login failed!")
        toast.error("login failed")
      } 
    }
  } 
  setTimeout(() => {
    setText(""); 
  }, 3000);
  return(
    <>
      <div className='aBOut'>
        <div className='about1'>
          <div className='about2'>
            <div>
             <div className='box1'>
              <h3 className='abtsgn'>Login</h3>
              <h2 className='about4'>User-Name</h2>
              <input  type='text' placeholder="Enter user-name"  className='input1' value={name} onChange={(e)=>setName(e.target.value)} ></input>
              <h2 className='about5'>Password</h2>
              <input  type='text' placeholder="Enter Password" className='input2' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
              <Link className='about6'>Forget Password</Link>
              {
                show ?<div id='valid'>{text}</div>:null
              }
              <h1><button className='submit' onClick={handleSubmit} type="button" >LOGIN</button></h1>
              <div className='about7'>
                <div className='about8'>
                <a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AeZLP9-yAzZYFAMqjNBkyDSbWBacaRosGuKxZUeD6HEF4gIfXEEU2y_dn1Ntq43Zl4JfZyMb9Fb5ZA&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-920095921%3A1735363083885157&ddm=1'><img src='https://img.icons8.com/?size=80&id=JvOSspDsPpwP&format=png' height={'40px'} width={'40px'}></img></a>
                <a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AeZLP9-yAzZYFAMqjNBkyDSbWBacaRosGuKxZUeD6HEF4gIfXEEU2y_dn1Ntq43Zl4JfZyMb9Fb5ZA&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-920095921%3A1735363083885157&ddm=1'><h7 className='about10'>Google</h7></a>
                </div>
                <div className='about9'>
                  <a href='https://www.facebook.com/'><img src='https://img.icons8.com/?size=48&id=118497&format=png' height={'40px'} width={'40px'}></img></a>
                  <a href='https://www.facebook.com/'><h7 className='about11'>facebook</h7></a>
                </div>
              </div>
             </div>  
            </div>
            <img className='about3' src='https://cdn-icons-png.freepik.com/256/15256/15256311.png?ga=GA1.1.2002137200.1734634688&semt=ais_hybrid'></img> 
          </div> 
        </div>
      </div>
    </>
  ) 
}
export default About 
