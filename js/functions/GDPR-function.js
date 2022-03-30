export async function GDPR() {
    const getUser = localStorage.getItem("inloggad");
    const modal = document.querySelector(".GDPR-modal");
    const response = await fetch("http://localhost:3000/users/userId", {
        method: "PATCH",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ getUser }),
    });
    const data = await response.json();
    console.log(data.hasLoggedIn);
    if ((data.hasLoggedIn = 1)) {
        modal.setAttribute("style", "display: block");
    }
    document.querySelector(".declineCookies").addEventListener("click", () => {
        modal.setAttribute("style", "display: none");
    });
    document.querySelector(".acceptCookies").addEventListener("click", () => {
        modal.setAttribute("style", "display: none");
    });
}
