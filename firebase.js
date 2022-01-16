import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
     apiKey: "AIzaSyCTfViz-zyQqGOxKUvUoV5ybO8RnrJgVcs",
     authDomain: "let-s-build-disneyplus.firebaseapp.com",
     projectId: "let-s-build-disneyplus",
     storageBucket: "let-s-build-disneyplus.appspot.com",
     messagingSenderId: "547483304068",
     appId: "1:547483304068:web:d7b04e88cdc1a24e7442d1",
     measurementId: "G-GF2S02JD7K"
};

const app = !getApps.length  ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
export default app;
