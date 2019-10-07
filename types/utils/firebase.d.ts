import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
export declare const app: firebase.app.App;
export declare const db: firebase.firestore.Firestore;
export declare const functions: firebase.functions.Functions;
export declare const query: (col: string) => (id: string) => Promise<firebase.firestore.DocumentSnapshot>;
