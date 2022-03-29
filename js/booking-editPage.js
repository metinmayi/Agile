import { logout } from "./functions/logout.js";
import { modifyBooking } from "./functions/book.js";
window.onload = function () {
	// Logout function
	logout();

	// Modify Booking Function
	modifyBooking();
};
