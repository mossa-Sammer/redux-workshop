import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC8hYjc9NOcd_UWLGHjLvG0ZqvZ9o1auvM',
  authDomain: 'redux-toolkit-3d636.firebaseapp.com',
  projectId: 'redux-toolkit-3d636',
  storageBucket: 'redux-toolkit-3d636.appspot.com',
  messagingSenderId: '233517781822',
  appId: '1:233517781822:web:df415e62891468a492526f',
};

class FirebaseUtil {
  firestore: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
  }

  signUp = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();
}

export default new FirebaseUtil();
