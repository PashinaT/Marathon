import  firebase  from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyAOAxbwXuQT41CpguGF8RmqqdsKXSfeAnc",
    authDomain: "pokemon-game-6e0fb.firebaseapp.com",
    databaseURL: "https://pokemon-game-6e0fb-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-6e0fb",
    storageBucket: "pokemon-game-6e0fb.appspot.com",
    messagingSenderId: "729665355575",
    appId: "1:729665355575:web:031541b3fbadf4232364b2"
};


firebase.initializeApp(firebaseConfig);

class Firebase{
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokrmonsOnce = async()=>
    {
        return await this.database.ref('pokemons').once('value').then(snapshot=>snapshot.val());
    };

    getPokemonSoket = (cb)=>{
        this.database.ref('pokemons').on('value',(snapshot)=>{
            cb(snapshot.val())
        })
    };


    offPokemonSoket = (cb)=>{
        this.database.ref('pokemons').off()
    };
    postPokemon = (key,pokemon)=>{
        this.database.ref(`pokemons/${key}`).set(pokemon);
    };

    addPokemon =(data,cb)=>{
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(()=>cb());
    }
}



export default Firebase;