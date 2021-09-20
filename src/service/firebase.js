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
export const database = firebase.database();


export default database;