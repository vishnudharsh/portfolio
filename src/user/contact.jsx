import Header from './header';
import { useState } from 'react';
import AXIOS from 'axios';
import { SiHackster } from "react-icons/si";
import '../css/phone.css';

function Contact(){
  const [email,setEmail]=useState('');
  const [phoneno,setPhoneno]=useState('');
  const [message,setMessage]=useState('');
  const contact=(e)=>{
    e.preventDefault();
    const url="http://localhost:9000/phonedata";
    AXIOS.post(url,{email,phoneno,message}).then((res)=>{
      alert(res.data)
    })
  }
    return(
        <>
        <Header />
        <body>
        <h6 style={{marginTop:"15px",color:"#ffff",marginRight:"1350px",fontWeight:"bold"}}><SiHackster className='hackers' />acking</h6>
        <div class="background">
        <div class="container">
          <div class="screen">
          <div class="screen-header">
          <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
          </div>
          </div>
        <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT ME</span>
          </div>
          <h5 style={{color:"#ffff",marginTop:"50px"}}>Get In Touch</h5>
          <h6 style={{color:"#ffff",marginTop:"20px"}}>Email:</h6>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" name='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" name='phoneno' onChange={(e)=>setPhoneno(e.target.value)} />
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" name='message' onChange={(e)=>setMessage(e.target.value)} />
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button" onClick={contact}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
        </>
    )
}
export default Contact;