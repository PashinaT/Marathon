import s from "./style.module.css"
import {useState, useRef, useEffect} from 'react'
import cn from 'classnames'
const Modal =({title,children, onCloseModal, isOpen})=>{

    const modalEl = useRef();
    const [isActive, setActive] = useState(null);
    const [isOpenModel, setOpenModel] = useState(null);
    const handleClick = () =>{
        setActive(isActive => !isActive)
    };
    const handleCloseModal =()=>{
        onCloseModal && onCloseModal(false)
    };

    const handleClickRoot=(event)=>{

        if(!modalEl.current.contains(event.target)){
            handleCloseModal();
        }
    };

    useEffect(()=>{
        document.querySelector('body').style.overflow = isOpen?'hidden':null
    },[isOpen]);

    return(<div onClick={handleClickRoot} className={cn(s.root, {[s.open]:isOpen})}>
            <div ref={modalEl} className={s.modal}>
                <div className={s.head}>
                    {title}
                    <span className={s.btnClose} onClick={handleCloseModal}></span>
                </div>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal