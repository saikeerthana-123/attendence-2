import firebase from 'firebase';

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDb-oKLBNTegQ0s-MMi6u0LF3CYOeECCvs",
    authDomain: "student-attendence-f5034.firebaseapp.com",
    databaseURL: "https://student-attendence-f5034.firebaseio.com",
    projectId: "student-attendence-f5034",
    storageBucket: "student-attendence-f5034.appspot.com",
    messagingSenderId: "908509170664",
    appId: "1:908509170664:web:163b87841a56c4bfec325d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.database();