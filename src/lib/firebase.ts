// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2UqHEM11nOj43BX2g7gzvJ2r1ue0kTU",
  authDomain: "sheridan-swiftie-club.firebaseapp.com",
  projectId: "sheridan-swiftie-club",
  storageBucket: "sheridan-swiftie-club.appspot.com",
  messagingSenderId: "771518961945",
  appId: "1:771518961945:web:6856abfb131434c2104d88",
  measurementId: "G-L08HBCQ7BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const  db = getFirestore(app);

// Deploy to Firebase Hosting
// You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

// Sign in to Google
// $firebase login
// Initiate your project
// Run this command from your app's root directory:

// $firebase init
// When you're ready, deploy your web app
// Put your static files (e.g. HTML, CSS, JS) in your app's deploy directory (the default is 'public'). Then, run this command from your app's root directory:

// $firebase deploy
// After deploying, view your app at sheridan-swiftie-club.web.app

// Need help? Take a look at the Hosting docs