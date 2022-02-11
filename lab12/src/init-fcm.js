import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyBUUbLMQRo5-o5Z4Mlo-1_Z0c8-ifcUptE",
  authDomain: "reac-noti.firebaseapp.com",
  projectId: "reac-noti",
  storageBucket: "reac-noti.appspot.com",
  messagingSenderId: "824183255364",
  appId: "1:824183255364:web:4906df27dc0f66f804a711",
  measurementId: "G-M73J3ZBDGE"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BEiJ5cUM1PESPxdLI-NkM1cZ8zpqON-7NapnbSf-s0qeSycEjE--4w_pNgLc0cEPJBElNguCJn0INfG0kk1I3M4"
);

export { messaging };
