import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKj4pfazlWKp6uBNaXlM5c1-OBDr8rEas',
  authDomain: 'todo-app-react-7719a.firebaseapp.com',
  projectId: 'todo-app-react-7719a',
  storageBucket: 'todo-app-react-7719a.appspot.com',
  messagingSenderId: '293106872858',
  appId: '1:293106872858:web:9beca30c96cc2620c0d7a3',
  measurementId: 'G-Q0Z201GD2D',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
