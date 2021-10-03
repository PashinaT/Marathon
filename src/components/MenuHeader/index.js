import Menu from "../MenuHeader/Menu"
import Navbar from "../MenuHeader/Navbar"
import {useState} from 'react'
import Modal from "../Modal";
import LoginForm from "../LoginForm"
import {NotificationManager} from "react-notifications";

const MenuHeader =()=>{

    const [isActive, setActive] = useState(null);
    const [isOpenModel, setOpenModel] = useState(false);
    const handleClick = () =>{
        setActive(isActive => !isActive)
    };
    const handelClickLogin =()=>{
        setOpenModel(prevState=>!prevState)
    };

    const handleSubmitEmail = async ({email,password,loginForm})=>{

        console.log(email);
        console.log(password);
        const requestOptions = {
            method:'POST',
            body:JSON.stringify({
                email,password,returnSecureToken : true
            })

        };

        const response= await fetch(loginForm?'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOAxbwXuQT41CpguGF8RmqqdsKXSfeAnc':'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOAxbwXuQT41CpguGF8RmqqdsKXSfeAnc',requestOptions).then(res=>res.json());


        console.log("ffff");
        console.log(response);
        if(response.hasOwnProperty('error'))
        {
            NotificationManager.error(response.error.message,'Title');
        }else{
            localStorage.setItem('idToken', response.idToken);
            NotificationManager.success('Success message!');
        }
    };


    return(
        <>
        <Menu isActive={isActive}/>
        <Navbar handleClick={handleClick} onClickLogin={handelClickLogin} isActive={isActive} />

                <Modal title={"Log in..."} onCloseModal={handelClickLogin} isOpen={isOpenModel}>
                    <LoginForm onSubmit={handleSubmitEmail}/>
                </Modal>
        </>
    )
};

export default MenuHeader