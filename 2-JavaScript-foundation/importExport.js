import { validateEmail, toUpperCaseName } from "./ImportExport/user/utils.js";
import User from "./ImportExport/user/user.js";

const name = "Jefferson";
const email = "jefferson@gmail.com";

if (validateEmail(email)) {
  const user1 = new User(toUpperCaseName(name), email);
  user1.displayInfo();
} else {
  console.log("Invalid email.");
}
