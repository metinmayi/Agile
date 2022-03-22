export async function logout() {
	const logoutButton = document.querySelector(".logoutatag");

	logoutButton.addEventListener("click", () => {
		localStorage.removeItem("inloggad");
		window.location.href = "http://127.0.0.1:5500/login.html";
	});
}
