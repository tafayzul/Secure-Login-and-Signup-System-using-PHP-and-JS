function validateForm() {
  // Get the values of each input field using their ids
  var fname = document.getElementById("tg_fname").value;
  var lname = document.getElementById("tg_lname").value;
  var mobile = document.getElementById("tg_mobile").value;
  var email = document.getElementById("tg_email").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var birthday = document.getElementById("tg_birthday").value;
  var password = document.getElementById("psw").value;
  var confirmPassword = document.getElementById("psw-repeat").value;

  // Define regular expressions to validate email and mobile number
  var emailRegex = /\S+@\S+\.\S+/;
  var mobileRegex = /^\d{10}$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

  // Check if any of the fields are empty
  if (fname == "" || lname == "" || mobile == "" || email == "" || !gender || birthday == "" || password == "" || confirmPassword == "") {
    alert("All fields are required");
    return false;
  }

  // Check if the email is valid
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Check if the mobile number is valid
  if (!mobileRegex.test(mobile)) {
    alert("Invalid mobile number");
    return false;
  }

  // Check if the password and confirm password match
  if (password != confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // Check if the password meets the requirements
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, with a minimum length of 8 characters");
    return false;
  }

  // If all validations pass, return true to submit the form
  return true;
}
