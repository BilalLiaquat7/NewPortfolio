const menuIcon = document.getElementById("menu");
const toggleMenu = () => {
  if (menuIcon.style.display === "flex") {
    menuIcon.style.display = "none";
  } else {
    menuIcon.style.display = "flex";
  }
};

document.getElementById("navicon").addEventListener("click", toggleMenu);
document.getElementById("cross").addEventListener("click", toggleMenu);
document.getElementById("work_m").addEventListener("click", toggleMenu);
document.getElementById("about_m").addEventListener("click", toggleMenu);
document.getElementById("contact_m").addEventListener("click", toggleMenu);