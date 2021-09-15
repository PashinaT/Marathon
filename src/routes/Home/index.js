import './style.module.css';
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import MenuHeader from "../../components/MenuHeader";

import bg1 from '../../assets/bg1.jpg';
import PokemonCard from "../../components/PokemonCard";
import f from "./style.module.css"
import d from "../../data.json"

function HomePage({onChangePage}) {
    const pokemons =d;
    const handleClickButton=(page)=>{
        onChangePage && onChangePage(page);
    };
    return (
        <div className="App">
            <MenuHeader/>
            <Header title={"Марафонный заголовок!"}
                    descr={"Прикольно атрибутики внутри создавать"}
                    onClickButton={handleClickButton}/>
            <Layout title={"Слой 1"} urlBg={bg1} descr={"мяу"} >
                <p>n the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
            </Layout>
            <Layout title={"Слой 2"} colorBg={'red'} descr={"мяу"}>
                <div className={f.flex}>
                    {
                        pokemons.map(item=><PokemonCard key={item.id} name={item.name} img={item.img} id={item.id} type ={ item.type} values={item.values}/>)
                    }
                </div>
            </Layout>
            <Layout title={"Слой 3"} urlBg={bg1} descr={"мяу"}/>
            <Footer />
        </div>
    );
}

export default HomePage;
