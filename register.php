<?php 
$host = "localhost";
$user = "root";
$password = "";
$dbname ="register";
$conn = mysqli_connect($host, $user, $password, $dbname);



// connection check
if(!$conn){
    die("Fail to connect" . mysqli_connect_error());
}

  
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $first_name = $_POST["First_Name"];
    $last_name = $_POST["Last_Name"];
    $mobile_number = $_POST["Mobile#"];
    $email = $_POST["Email"];
    $gender = $_POST["gender"];
    $birthday = $_POST["birthday"];
    $password = $_POST["psw"];

    $sql = "INSERT INTO guests (first_Name, last_name, mobile_number, email, gender, birthday, password) 
          VALUES ('$first_name', '$last_name', '$mobile_number', '$email', '$gender', '$birthday', '$password')";

    if(mysqli_query($conn ,$sql)){
        echo "Boommm";
    }else{
        echo "failed :(" .$sql ."<br>" . mysqli_connect_error($conn);
    }





}
mysqli_close($conn);




?>