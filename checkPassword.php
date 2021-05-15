<?php
session_start();
$con = mysqli_connect('localhost','root','','usersdb');

if(!$con){
    die('Prisijungti nepavyko: ' .mysqli_connect_error());
}

$password = $_POST['password'];
$sessionid = $_SESSION['id'];

$query = "SELECT `Slaptažodis` FROM `user` WHERE id=?";
if ($stmt = $con->prepare($query)){
    $stmt->bind_param("s", $sessionid);
    if($stmt->execute()){
        $stmt->store_result();
        $Password_check= "";         
        $stmt->bind_result($Password_check);
        $stmt->fetch();
        if (password_verify($password,$Password_check)){
            echo "exist";
        } else{
            echo "dosent exist";
        }
    }
}

?>