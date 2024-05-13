import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import AXIOS from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/signup.css';

function Signup(){
    const history=useNavigate();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handler=(e)=>{
        e.preventDefault();
        const url="http://localhost:9000/insertdata";
        AXIOS.post(url,{username,email,password}).then((res)=>{
            alert(res.data)
            history("/login")
        })
    }
    return(
        <>
        <body>
        <div class="sign-form">
        <div class="text">
            SIGNUP
        </div>
        <form>
        <div class="field">
        <div class="fas fa-envelope"><FiUser /></div>
            <input type="text" placeholder="User Name" name="username" onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div class="field">
        <div class="fas fa-envelope"><CiMail /></div>
            <input type="text" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div class="field">
        <div class="fas fa-lock"><RiLockPasswordLine /></div>
            <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        </form>
        <button type="submit" class="sign_btn" onClick={handler}>SIGNUP</button>
            <div class="link">
               Already have an account?
               <a href="/login"> Login Now</a>
            </div>
        </div>
        </body>
        </>
    )
}
export default Signup;