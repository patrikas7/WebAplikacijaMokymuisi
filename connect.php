<?php

session_start();
$con = mysqli_connect('localhost','root','','usersdb');

if(!$con){
    die('Prisijungti nepavyko: ' .mysqli_connect_error());
}

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = strtolower($_POST['email']);
$school = $_POST['school'];
$age = $_POST['age'];
$password = password_hash($_POST['password'],PASSWORD_DEFAULT);

if(empty($school)){
    $school = null;
}


$result = $con -> query("SELECT * FROM user");
$records_count = $result -> num_rows;
$id = $records_count + 1;
$_SESSION['id'] = $id;
$sql = "INSERT INTO `user` (`Vardas`, `Pavardė`, `Paštas`, `Mokykla`, `Amžius`, `Slaptažodis`, `id`)
        VALUES ('$name', '$surname', '$email', '$school', '$age', '$password','$id')";

$rs = $con -> query($sql);

if($rs){
    header("Location: http://localhost/webapp/mainPage.html");
} 
?>