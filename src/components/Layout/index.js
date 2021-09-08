import s from "./style.module.css"
import bg1 from "../../assets/bg1.jpg"

const Layout =({title,descr, urlBg, colorBg})=>{
    console.log(colorBg);
    console.log(urlBg);

    const stylesd ={
        background: colorBg,
        backgroundImage: `url(${urlBg})`
    };
    return(
        <section className={s.root} style={stylesd} >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}/>
                    </div>
                    <div className={[s.desc, s.full]}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout