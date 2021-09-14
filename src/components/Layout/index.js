import s from "./style.module.css"
import bg1 from "../../assets/bg1.jpg"
import cn from 'classnames'

const Layout =({title,descr, urlBg, colorBg, children})=>{
    const stylesd ={
        background: colorBg,
        backgroundImage: `url(${urlBg})`
    };
    console.log("what inside")
    console.log(children);
    return(
        <section className={s.root} style={stylesd} >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}/>
                    </div>
                    <div className={[s.desc, s.full]}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout