importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBUUbLMQRo5-o5Z4Mlo-1_Z0c8-ifcUptE",
  authDomain: "reac-noti.firebaseapp.com",
  projectId: "reac-noti",
  storageBucket: "reac-noti.appspot.com",
  messagingSenderId: "824183255364",
  appId: "1:824183255364:web:4906df27dc0f66f804a711",
  measurementId: "G-M73J3ZBDGE"
});

firebase.messaging();