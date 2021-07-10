import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvbz8kO8mRut_O9jwtyrbUHAzKeUVlvqA",
    authDomain: "slack-clone-841e6.firebaseapp.com",
    projectId: "slack-clone-841e6",
    storageBucket: "slack-clone-841e6.appspot.com",
    messagingSenderId: "840632558200",
    appId: "1:840632558200:web:563c1dd4e3b6ba9755838d",
    measurementId: "G-LQZ561Q5GP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider, db } ;