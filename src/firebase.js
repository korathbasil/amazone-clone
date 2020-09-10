const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCMK2cw2h9nY1LIc3L8vQggrHy6UodC_6g",
  authDomain: "e-clone-20cbe.firebaseapp.com",
  databaseURL: "https://e-clone-20cbe.firebaseio.com",
  projectId: "e-clone-20cbe",
  storageBucket: "e-clone-20cbe.appspot.com",
  messagingSenderId: "585864792782",
  appId: "1:585864792782:web:c645ef92c1d29eef909e9f",
  measurementId: "G-80DLMV97CD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
