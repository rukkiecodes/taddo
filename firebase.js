import * as firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDUGveXbBzy_ff3K263BXLizEDdczd12g8",
  authDomain: "taskcheq.firebaseapp.com",
  projectId: "taskcheq",
  storageBucket: "taskcheq.appspot.com",
  messagingSenderId: "404474909957",
  appId: "1:404474909957:web:91df98dd4c90278a25936c",
  measurementId: "G-MN6DFG7HWB"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default { fb }