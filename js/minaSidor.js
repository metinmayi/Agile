import { GetBookings } from "./functions/book.js";
import { logout } from "./functions/logout.js";
import { GDPR } from "./functions/GDPR-function.js";

window.onload = function () {
    // Logout button
    logout();

    // GetBookings
    GetBookings();

    GDPR();
};
