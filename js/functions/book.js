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

export async function GetBookings() {
	const user = localStorage.getItem("inloggad");
	let bookings = [];
	try {
		const response = await fetch(`http://localhost:3000/bookings/${user}`, {
			method: "GET",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		bookings = data;
	} catch (error) {
		console.log(error);
	}

	const container = document.querySelector(".scroll");
	if (bookings.length < 1) {
		const noBookingsP = document.createElement("h5");
		noBookingsP.append("Du har inga bokade städningar.");
		noBookingsP.setAttribute("style", "margin-bottom: 5vh");
		container.appendChild(noBookingsP);
	}

	bookings.forEach((booking) => {
		const wrapper = document.createElement("div");
		wrapper.className = "bokadstädul";
		container.appendChild(wrapper);

		const address = document.createElement("div");
		address.className = "bokadstädli";
		address.append(`Adress: ${booking.address}`);
		wrapper.appendChild(address);

		const date = document.createElement("div");
		date.append(`Datum: ${booking.date}`);
		wrapper.append(date);

		const time = document.createElement("div");
		time.className = "linegray";
		time.append(`Tid: ${booking.time}`);
		wrapper.append(time);

		const buttonContainer = document.createElement("div");
		buttonContainer.className = "bokadbtncontainer";
		wrapper.append(buttonContainer);

		const firstATag = document.createElement("a");
		firstATag.className = "ändraatag";
		firstATag.href = "/ändra";
		buttonContainer.appendChild(firstATag);

		const firstButton = document.createElement("button");
		firstButton.className = "ändrabtn";
		firstButton.append("Ändra");
		firstATag.appendChild(firstButton);

		const secondATag = document.createElement("a");
		secondATag.className = "tabortatag";
		secondATag.href = "/ta-bort";
		buttonContainer.appendChild(secondATag);

		const secondButton = document.createElement("button");
		secondButton.className = "tabortbtn";
		secondButton.append("Ta Bort");
		secondATag.appendChild(secondButton);
	});
}
