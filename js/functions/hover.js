const logoutatag = document.querySelector(".logoutatag");

logoutatag.addEventListener("mouseover", () => {
  const logoutimg = document.querySelector(".logoutbtn");
  const logouttxt = document.querySelector(".logouttext");
  logouttxt.innerHTML = "I'm out";
  logoutimg.className = "hoppaut";
  logoutimg.src = "/assets/Logga-ut-hopp.png";
});
logoutatag.addEventListener("mouseout", () => {
  const logoutimg = document.querySelector(".hoppaut");
  const logouttxt = document.querySelector(".logouttext");
  logoutimg.className = "logoutbtn";
  logoutimg.src = "/assets/Logga-ut-sugare.png";
  logouttxt.innerHTML = "Logga ut";
});
