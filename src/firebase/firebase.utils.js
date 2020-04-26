import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAevK5i1L2S2L0pt0cQ-6s2JSng2TXIlDw",
    authDomain: "crwn-db-89ab3.firebaseapp.com",
    databaseURL: "https://crwn-db-89ab3.firebaseio.com",
    projectId: "crwn-db-89ab3",
    storageBucket: "crwn-db-89ab3.appspot.com",
    messagingSenderId: "975381364519",
    appId: "1:975381364519:web:ca7afee556505c1e9d3302",
    measurementId: "G-8V8GFN78S4"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ' + error);
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;