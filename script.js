// Function to save the password
function savePassword() {
  var url = document.getElementById("url").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var showPasswordCheckbox = document.getElementById("show-password");

  if (url && username && password) {
    // Create a new list item to display the saved password
    var listItem = document.createElement("li");
    listItem.innerHTML = `<strong>URL:</strong> ${url}, <strong>Username:</strong> ${username}, <strong>Password:</strong> ${password}`;

    // Append the new list item to the passwords list
    var passwordsList = document.getElementById("passwords-list");
    passwordsList.appendChild(listItem);

    // Set the visibility preference of the password input field
    if (showPasswordCheckbox.checked) {
      document.getElementById("password").type = "text"; // Show password characters as plain text
    } else {
      document.getElementById("password").type = "password"; // Show password characters as dots
    }

    // Clear the input fields
    document.getElementById("url").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
}

// Function to generate a password
function generatePassword() {
  var passwordLength = 10; // Set the desired length of the generated password
  var passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Define the characters to be used in the password

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    generatedPassword += passwordCharacters.charAt(randomIndex);
  }

  // Set the generated password to the password input field
  document.getElementById("password").value = generatedPassword;
}

// Function to toggle password visibility
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("show-password");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text"; // Show password characters as plain text
  } else {
    passwordInput.type = "password"; // Show password characters as dots
  }
}
