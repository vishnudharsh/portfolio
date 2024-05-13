import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import AXIOS from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/login.css';

function Login(){
    const history=useNavigate();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    async function submit(e){
        e.preventDefault();

        try{
            await AXIOS.post("http://localhost:9000/",{
                username,password
            })
            .then((res)=>{
                if(res.data=="exist"){
                    history("/home", sessionStorage.setItem('username', username));
                }
                else if(res.data=="not exist"){
                    alert("user have not signup")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <>
        <body>
        <div class="login-form">
        <div class="text">
            LOGIN
        </div>
        <form>
        <div class="field">
        <div class="fas fa-envelope"><CiMail /></div>
            <input type="text" placeholder="User Name" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div class="field">
        <div class="fas fa-lock"><RiLockPasswordLine /></div>
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        </form>
        <button type="submit" className='wrap' onClick={submit}>LOGIN</button>
            <div class="link">
               Don't have an account?
            <a href="/"> Signup Now</a>
            </div>
        </div>
        </body>
        </>
    )
}
export default Login;