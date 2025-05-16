
// assets/js/login.js

const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // login สำเร็จ -> พาไปหน้า index.html
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      errorMsg.textContent = "ผิดพลาด: " + error.message;
      loginForm.reset();
    });
});
