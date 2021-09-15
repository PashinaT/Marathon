import Menu from "../MenuHeader/Menu"
import Navbar from "../MenuHeader/Navbar"
import {useState} from 'react'

const MenuHeader =()=>{

    const [isActive, setActive] = useState(false);
    const handleClick = (isActive) =>{
        setActive(!isActive)
    }

    return(
        <>
        <Menu isActive={isActive}/>
        <Navbar handleClick={handleClick} isActive={isActive}/>
        </>
    )
};

export default MenuHeader