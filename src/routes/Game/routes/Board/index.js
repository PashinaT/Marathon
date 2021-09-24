import {PokemonContext} from "../../../../context/PokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";
import {useHistory} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import PlayerBoard from "./component/PlayerBoard";

const BoardPage = () => {
    const [board, setBoard]= useState([]);
    const [player2, setPlayer2]= useState([]);
    const [choiceCard,setChoiceCard] = useState(null);
    const {pokemon} = useContext(PokemonContext);
    const history= useHistory();

console.log(player2);
    useEffect(async ()=>{
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board')
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();

        setPlayer2(player2Request.data);

        console.log( board);
    },[]);

    const handleClickBoardPlate = (position) =>
    {
        console.log(position);
        console.log(choiceCard);
    }
    // if(Object.values(pokemon).length ===0)
    // {
    //     history.replace('/game');
    // }
    return (
        <div className={s.root}>
            <div className={s.playerOne}>

                <PlayerBoard cards={Object.values(pokemon)} onClickCard={(card)=>setChoiceCard(card)}/>
            </div>
            <div className={s.board}>
                {
                    board.map(item => (
                        <div  key={item.position}
                              className={s.boardPlate}
                        onClick={()=>!item.card && handleClickBoardPlate(item.position)}>
                            {
                                item.card &&
                                    <PokemonCard {...item} minimize/>
                            }
                        </div>
                        )
                    )
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard cards={player2} onClickCard={(card)=>setChoiceCard(card)}/>
            </div>
        </div>
    );
};

export default BoardPage;