import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCH_zL8dwHhluxneGdHy8j4QhVeSsrleC8",
  authDomain: "fir-admin-3fb43.firebaseapp.com",
  databaseURL: "https://fir-admin-3fb43-default-rtdb.firebaseio.com",
  projectId: "fir-admin-3fb43",
  storageBucket: "fir-admin-3fb43.appspot.com",
  messagingSenderId: "228232716499",
  appId: "1:228232716499:web:cae51c1c07d6ae6056b426",
  measurementId: "G-HYBSD5192V",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BLTRYNxOoG6OK0_H4iJo9Ot1Y1q7rcHfiifg3e_maJchS2eR8JI1T3nLpa_HkrTTfaYB8BdJpvYUmxxkvRrFDdE",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("currentToken", currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("No permission granted.");
    }
  });
}

requestPermission();
