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
			window.location.href = "http://127.0.0.1:5500/payment.html";
		} catch (error) {
			console.log(error);
		}
	});
}

async function displayCurrentBookings(booking, container) {
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

	const firstButton = document.createElement("button");
	firstButton.className = "ändrabtn";
	firstButton.append("Ändra");
	buttonContainer.appendChild(firstButton);

	const secondButton = document.createElement("button");
	secondButton.className = "tabortbtn";
	secondButton.id = booking._id;
	secondButton.append("Ta Bort");
	buttonContainer.appendChild(secondButton);

	firstButton.addEventListener("click", async (e) => {
		e.preventDefault();
		localStorage.setItem("modifying", booking._id);
		window.location.href = "http://127.0.0.1:5500/booking-edit.html";
	});
	secondButton.addEventListener("click", async (e) => {
		e.preventDefault();
		await fetch("http://localhost:3000/bookings/cancel", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id: booking._id }),
		});
		GetBookings();
	});
}

function displayOldBookings(booking, historyContainer) {
	const wrapper = document.createElement("div");
	wrapper.className = "historikul";
	historyContainer.appendChild(wrapper);

	const address = document.createElement("div");
	address.className = "historikli";
	address.append(booking.address);
	wrapper.appendChild(address);

	const date = document.createElement("div");
	date.append(booking.date);
	wrapper.appendChild(date);

	const time = document.createElement("div");
	time.className = "line";
	time.append(booking.time);
	wrapper.appendChild(time);
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
	const historyContainer = document.querySelector("#historik");
	container.replaceChildren();
	historyContainer.replaceChildren();
	if (bookings.length < 1) {
		const noBookingsP = document.createElement("h5");
		noBookingsP.append("Du har inga bokade städningar.");
		noBookingsP.setAttribute("style", "margin-bottom: 5vh");
		container.appendChild(noBookingsP);
		return;
	}

	bookings.forEach((booking) => {
		const currentTime = new Date();
		const bookingTime = new Date(`${booking.date} ${booking.time}`);
		if (bookingTime < currentTime) {
			return displayOldBookings(booking, historyContainer);
		}
		displayCurrentBookings(booking, container);
	});
}

export async function modifyBooking() {
	const modifyForm = document.querySelector(".registerForm");
	modifyForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		// Finds all the inputs
		const inputs = document.querySelectorAll("input");
		try {
			const bookingObject = {
				id: localStorage.getItem("modifying"),
				username: localStorage.getItem("inloggad"),
				date: inputs[0].value,
				address: inputs[1].value,
				postalCode: inputs[2].value,
				district: inputs[3].value,
				time: inputs[4].value,
			};
			await fetch("http://localhost:3000/bookings/modify", {
				method: "PATCH",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(bookingObject),
			});
			window.location.href = "http://127.0.0.1:5500/payment.html";
			console.log(bookingObject);
		} catch (error) {
			console.log(error);
		}
	});
}
