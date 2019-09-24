import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
const firebaseConfig = {
    apiKey: "AIzaSyA42mJ5aKLQI-8kFt24thcEVIoInKkEQDk",
    authDomain: "fontumibots.firebaseapp.com",
    databaseURL: "https://fontumibots.firebaseio.com",
    projectId: "fontumibots",
    storageBucket: "fontumibots.appspot.com",
    messagingSenderId: "1047975832929",
    appId: "1:1047975832929:web:3778f496fc1321d8"
};
export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const functions = app.functions();
export const query = (col) => {
    const docs = new Map();
    return async (id) => {
        const doc = await db
            .collection(col)
            .doc(id)
            .get();
        if (!docs.get(id)) {
            docs.set(id, doc);
        }
        return docs.get(id);
    };
};
