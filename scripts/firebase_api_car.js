//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

  // Your API stuff goes here;  get it from firebase console
  apiKey: "AIzaSyA8dQVhhJ4fdPVMv7IS0ArGR3VlXA7YlUQ",
  authDomain: "car-insurance-122c7.firebaseapp.com",
  databaseURL: "https://car-insurance-122c7.firebaseio.com",
  projectId: "car-insurance-122c7",
  storageBucket: "car-insurance-122c7.appspot.com",
  messagingSenderId: "4122484594",
  appId: "1:4122484594:web:01132142f2c607600a07eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();