import s from "./style.module.css"
import cn from 'classnames'
import {useState} from 'react'
import Input from "../Input";

const LoginForm =({onSubmit})=>{

    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [loginForm,setLoginForm]=useState(true);

    const handleClick = (e) =>{

        e.preventDefault();
        onSubmit && onSubmit({email,password,loginForm});
        setPassword('');
        setEmail('');
    };

    return(
        <form onSubmit={handleClick}>
            <Input value={email} changeValue={(e)=>setEmail(e.target.value)} label={"Email"} name={"Email"}/>
            <Input value={password} changeValue={(e)=>setPassword(e.target.value)} label={"Password"} type={"password"} name={"password"}/>
            <div style={{marginLeft:"450px"}}>
                <p style={{fontSize:"20px", cursor:"pointer"}} onClick={()=>setLoginForm(prevState => !prevState)}>{loginForm?"Registry?":"Login?"}</p>
            </div>
            <button >
                {loginForm?"Registry":"Login"}
            </button>
        </form>
    )
};

export default LoginForm