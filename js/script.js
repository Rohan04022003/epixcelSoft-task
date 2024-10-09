document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // Extract form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  // Check if the password is alphanumeric and contains at least one letter and one number
  const isValidPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password);
  if (!isValidPassword) {
      alert("Password must be alphanumeric and contain at least one letter and one number.");
      return; // Stop the form submission
  }

  // Create object with form data
  const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      password: password,
  };

  // Log form data as an object in console
  console.log(formData);

  // Show success message
  alert("Login successfully! You can check your data in the console.");

  // Clear the input fields after form submission
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";
});

// Function to allow only digits in the phone input
function preventNonDigits(input) {
  // Only allow digits (0-9)
  input.value = input.value.replace(/\D/g, "");
}
