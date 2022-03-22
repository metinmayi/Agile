export async function login() {
	const loginForm = document.querySelector(".loginForm");
	const inputs = document.querySelectorAll("input");
	loginForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:3000/users/login", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: inputs[0].value,
					password: inputs[1].value,
				}),
			});
			const data = await response.json();
			console.log(data);

			if (data.loggedIn) {
				localStorage.setItem("inloggad", inputs[0].value);
			}
		} catch (error) {
			console.log(error);
		}
	});
}