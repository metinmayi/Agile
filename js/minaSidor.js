import { GetBookings } from "./functions/book.js";
import { logout } from "./functions/logout.js";
window.onload = function () {
  // Logout button
  logout();

  // GetBookings
  GetBookings();
};
