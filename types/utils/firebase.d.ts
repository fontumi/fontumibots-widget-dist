import firebase from "firebase/app";
import "firebase/firestore";
export declare const app: firebase.app.App;
export declare const db: firebase.firestore.Firestore;
export declare const query: (col: string) => (id: string) => firebase.firestore.DocumentReference;
