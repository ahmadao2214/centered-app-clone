import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC2h4xInW_aOSwrtXkqOxakXhiONylsQEs",
    authDomain: "centeredappclone.firebaseapp.com",
    databaseURL: "https://centeredappclone-default-rtdb.firebaseio.com",
    projectId: "centeredappclone",
    storageBucket: "centeredappclone.appspot.com",
    messagingSenderId: "1059482409836",
    appId: "1:1059482409836:web:10fbafd772a39941cd3149",
    measurementId: "G-DS56B0NK6B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default {app}

