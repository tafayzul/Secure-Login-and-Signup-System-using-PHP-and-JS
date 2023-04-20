<?php
if (isset($_GET["message"])) {
  echo "<h1>" . $_GET["message"] . "</h1>";
}
if (isset($first_name) && isset($last_name)) {
  echo "<p>Your name is $first_name $last_name.</p>";
}
?>
