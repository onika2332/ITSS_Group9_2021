// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite';

// Đây là config của 1 DB giả lập, khi thực hiện trên project thực chỉ cần thay dổi config.
const firebaseConfig = {
    apiKey: "AIzaSyDM10Y50sP40C-5G6mDtJSyVQ0FmCiiHi0",
    authDomain: "test-firestore-api-dc56b.firebaseapp.com",
    projectId: "test-firestore-api-dc56b",
    storageBucket: "test-firestore-api-dc56b.appspot.com",
    messagingSenderId: "626879211484",
    appId: "1:626879211484:web:698848e5f783487a589119",
    measurementId: "G-9F5KWLF732"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getDocSnap = async (dbName, id) => {
    try {
        const docRef = doc(db, dbName, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exist()) {
            return docSnap;
        } else {
            return undefined;
        }
    } catch (err) {
        return undefined;
    }
} 
