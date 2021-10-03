import s from "./style.module.css";

const Input =({value,changeValue, type="text",label, name})=> {

    return(
    <div className={s.root}>
        <input type={type}
               name={name}
               className={s.input}
               value={value}
               onChange={changeValue}
               required/>
        <span className={s.highlight}></span>
        <span className={s.bar}></span>
        <label className={s.label}>{label}</label>
    </div>
    )
};

export default Input