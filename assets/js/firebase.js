// assets/js/firebase.js

// TODO: เปลี่ยนค่า config ให้ตรงกับโปรเจกต์ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyACvz8DwQOW_7WLzU5uvD6fpU0BI5MoZ_8",
  authDomain: "mylogin-e355f.firebaseapp.com",
  projectId: "mylogin-e355f",
  storageBucket: "mylogin-e355f.appspot.com",
  messagingSenderId: "950589957571",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();