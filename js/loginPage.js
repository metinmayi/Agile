import { login, loggedInChecker } from "./functions/loginFunction.js";
window.onload = function () {
  // Checks if already logged in
  loggedInChecker();
  // The function for logging in
  login();
};
