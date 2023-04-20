function clearForm() {
    document.getElementById("emailOrMobileNumber").value = "";
    document.getElementById("password").value = "";
  }
  

  function clearForm() {
    document.getElementById("loginForm").reset();
  }

  function validateForm() {
    // Get form inputs
    var emailOrMobileNumber = document.getElementById("emailOrMobileNumber").value.trim();
    var password = document.getElementById("password").value.trim();

    // Check if any fields are empty
    if (emailOrMobileNumber === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    }

    // Email or mobile number validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regular expression for email validation
    var mobileRegex = /^\d{10}$/; // Regular expression for Indian mobile numbers
    if (!emailRegex.test(emailOrMobileNumber) && !mobileRegex.test(emailOrMobileNumber)) {
      alert("Please enter a valid email or mobile number");
      return false;
    }

    // CSRF token validation (optional)
    // ...

    return true;
  }