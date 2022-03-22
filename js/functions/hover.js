const logoutatag = document.querySelector(".logoutatag");

logoutatag.addEventListener("mouseover", () => {
  const logoutimg = document.querySelector(".logoutbtn");
  const logouttxt = document.querySelector(".logouttext");
  logoutimg.src = "/assets/Logga-ut-hopp.png";
  logouttxt.innerHTML = "I'm out";
});
logoutatag.addEventListener("mouseout", () => {
  const logoutimg = document.querySelector(".logoutbtn");
  const logouttxt = document.querySelector(".logouttext");
  logoutimg.src = "/assets/Logga-ut-sugare.png";
  logouttxt.innerHTML = "Logga ut";
});
