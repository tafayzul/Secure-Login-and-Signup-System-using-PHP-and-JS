<?php
// Connect to MySQL database
$host = "localhost";
$username = "root";
$password = "";
$dbname = "register";
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $emailOrMobileNumber = $_POST["emailOrMobileNumber"];
  $password = $_POST["password"];
  
  // Query database to check if the user exists
  $sql = "SELECT * FROM guests WHERE (email = '$emailOrMobileNumber' OR mobile_number = '$emailOrMobileNumber')";
  $result = $conn->query($sql);

  if ($result->num_rows == 1) {
    // Verify the password
    $row = $result->fetch_assoc();
    $password_hashed = $row["password"];
    if (password_verify($password, $password_hashed)) {
      // Get the user's information from the MySQL database
      $first_name = $row["first_Name"];
      $last_name = $row["last_name"];
    
      // Redirect to success page with welcome message and user's name
      $success_message = "Welcome, $first_name $last_name!";
      header("Location: success.php?message=" . urlencode($success_message));
      exit();
    }
  }
  // Display error message if login fails
  $error_message = "Invalid email or mobile number and password combination.";
}

// Close database connection
$conn->close();
?>
<?php if (isset($error_message)): ?>
  <div class="alert alert-danger"><?php echo $error_message ?></div>
<?php endif; ?>
