import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAI393cdorqh95K3zoQJOi3LMZe2_aSkKI",
  authDomain: "todo-react-6725e.firebaseapp.com",
  databaseURL: "https://todo-react-6725e.firebaseio.com",
  projectId: "todo-react-6725e",
  storageBucket: "todo-react-6725e.appspot.com",
  messagingSenderId: "530586809850",
  appId: "1:530586809850:web:7e814a08dbaa0998872043"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;