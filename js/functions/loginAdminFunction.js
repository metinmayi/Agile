export async function loginAdmin() {
  const loginForm = document.querySelector(".registeradminForm");
  const inputs = document.querySelectorAll("input");
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/usersadmin/loginadmin",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: inputs[0].value,
            hashedPassword: inputs[1].value,
          }),
        }
      );

      const data = await response.json();

      if (data.loggedIn) {
        localStorage.setItem("inloggad", inputs[0].value);
        window.location.href = "http://127.0.0.1:5500/minasidoradmin.html";
        return;
      }
      const errorMessage = document.querySelector(".errorMessage");
      errorMessage.replaceChildren(data.message);
    } catch (error) {
      console.log(error);
    }
  });
}

// export async function loggedInChecker() {
//   if (localStorage.getItem("inloggad")) {
//     window.location.href = "http://127.0.0.1:5500/minasidoradmin.html";
//   }
// }
