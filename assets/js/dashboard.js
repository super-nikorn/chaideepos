// const userNameE1 = document.getElementById("user-name");
// const userEmailE1 = document.getElementById("user-email");
// const userBalanceE1 = document.getElementById("user-balance");
// const logoutBtn = document.getElementById("logout-btn");

// auth.onAuthStateChanged((user) => {
//     if (user) {
//         const uid = user.uid;
    
//         //ดึงข้อมูงจาก firebase
//         db.collection("user").doc(uid).get()
//             .then((doc) => {
//             if (doc.exists) {
//                 const data = doc.data();
//                 userNameE1.textContent = data.name || "ไม่มีชื่อ";
//                 userEmailE1.textContent = data.email || user.email;
//                 userBalanceE1.textContent = data.balance !== undefined ? data.balance : "0";
//             } else {
//                 console.error("ไม่พบข้อมูลผู้ใช้ใน Firestore")
//             }
//             });
//     } else {
//         window.location.href = "login.html"
//     }
// });

// logoutBtn.addEventListener("click", () => {
//     auth.sigOut().then(() => {
//         window.location.href = "login.html"
//     });
// });

// assets/js/dashboard.js

const userNameEl = document.getElementById("user-name");
const userEmailEl = document.getElementById("user-email");
const userBalanceEl = document.getElementById("user-balance");
const logoutBtn = document.getElementById("logout-btn");

// ตรวจสอบว่า user login อยู่ไหม
auth.onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;

    // ดึงข้อมูลจาก Firestore
    db.collection("users").doc(uid).get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          userNameEl.textContent = data.name || "ไม่มีชื่อ";
          userEmailEl.textContent = data.email || user.email;
          userBalanceEl.textContent = data.balance !== undefined ? data.balance : "0";
        } else {
          console.error("ไม่พบข้อมูลผู้ใช้ใน Firestore");
        }
      });
  } else {
    // ยังไม่ login → redirect กลับ login.html
    window.location.href = "login.html";
  }
});

// ปุ่ม logout
logoutBtn.addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
});
