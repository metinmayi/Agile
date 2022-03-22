export async function book() {
	const bookingForm = document.querySelector(".registerForm");
	bookingForm.addEventListener("submit", async (e) => {
		e.preventDefault();

		// Finds all the inputs
		const inputs = document.querySelectorAll("input");
		try {
			const bookingObject = {
				username: localStorage.getItem("inloggad"),
				date: inputs[0].value,
				address: inputs[1].value,
				postalCode: inputs[2].value,
				district: inputs[3].value,
				time: inputs[4].value,
			};
			const response = await fetch("http://localhost:3000/bookings/book", {
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(bookingObject),
			});
			window.location.href = "http://127.0.0.1:5500/minasidor.html";
		} catch (error) {
			console.log(error);
		}
	});
}
