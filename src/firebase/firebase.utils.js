import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBsKO1g-B_yNoX8oIqyMwXZ80pI6FBC5gE",
  authDomain: "kdk-db.firebaseapp.com",
  databaseURL: "https://kdk-db.firebaseio.com",
  projectId: "kdk-db",
  storageBucket: "kdk-db.appspot.com",
  messagingSenderId: "624937299120",
  appId: "1:624937299120:web:3ec1a405900910e6439f75",
  measurementId: "G-MRCNMMX9CD",
};

export const createUserPofileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
