import { book } from "./functions/book.js";
import { logout } from "./functions/logout.js";
window.onload = function () {
	// Logout function
	logout();

	// Booking function
	book();
};
