import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";
import  {useState} from 'react'
import cn from 'classnames'
const PlayerBoard = ({cards,onClickCard})=>{
     const [isSelected,setSelected] = useState(null);
    return(
        <>
            {
                    cards.map((item) => (
                        <div              key={item.id} className={cn(s.cardBoard,{[s.selected]:isSelected===item.id})}
                                          onClick={()=>{
                                              setSelected(item.id);
                                          onClickCard && onClickCard(item);}}>
                            <PokemonCard
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                type ={ item.type}
                                values={item.values}
                                minimize
                                isActive
                            />
                         </div>

                    ))

                }
            }
        </>
    )
};

export default PlayerBoard;