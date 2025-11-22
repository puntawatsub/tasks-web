// const bcrypt = require("bcrypt");

// const hashPassword = async () => {
//   const password = "mySecurePassword";

//   try {
//     const salt = await bcrypt.genSalt(10);

//     const hashedPassword = await bcrypt.hash(password, salt);

//     console.log("Password:", password);
//     console.log("Salt:", salt);
//     console.log("Hashed Password:", hashedPassword);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// async function comparePassword() {
//   const inputPassword = "mySecurePassword"; // Replace with the password you want to compare
//   const hashedPassword =
//     "$2b$10$5l9R4C1VjkWgeV5NqGAWWOgWF6C6xl48.w9MiYiB2yNWn1y87MVS6"; // Replace with the hashed password stored in your application

//   try {
//     // Compare the input password with the stored hashed password
//     const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

//     if (isMatch) {
//       console.log("Password is correct.");
//     } else {
//       console.log("Password is incorrect.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// comparePassword();

const bcrypt = require("bcrypt");

const password = "mySecurePassword";

// Hash password synchronously with 10 salt rounds
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log("Synchronous Hashed Password:", hashedPassword);
