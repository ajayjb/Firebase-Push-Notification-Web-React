importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

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

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
