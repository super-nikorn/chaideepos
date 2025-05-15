function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.classList.toggle("show");
}

fetch("https://script.google.com/macros/s/....../exec", {
  method: "POST",
  body: new URLSearchParams({
    name: "ชื่อที่กรอก",
    password: "รหัสผ่านที่กรอก"
  })
})
