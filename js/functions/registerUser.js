export function registerUser() {
	document.getElementById("registerForm");
	registerForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:3000/users/register", {
			method: "POST",
		});
		const result = await response.json();
		console.log(result);
	});
}
