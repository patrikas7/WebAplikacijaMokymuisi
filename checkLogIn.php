<?php
session_start();
$con = mysqli_connect('localhost','root','','usersdb');

if(!$con){
    die('Prisijungti nepavyko: ' .mysqli_connect_error());
}

$email = strtolower($_POST['email']);
$password = $_POST['password'];

$query = "SELECT `Slaptažodis` FROM `user` WHERE Paštas=?";
if ($stmt = $con->prepare($query)){
    $stmt->bind_param("s", $email);
    if($stmt->execute()){
        $stmt->store_result();
        $email_check= "";         
        $stmt->bind_result($email_check);
        $stmt->fetch();
        if (password_verify($password,$email_check)){
            getUserId($con,$email);
            echo "exist";
        } else{
            echo "dosent exist";
        }
    }
}

function getUserId(object $con, string $email){
    $query = "SELECT `id` FROM `user` WHERE Paštas = '$email'";
    $result = mysqli_query($con,$query);
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_array($result)) {
            $_SESSION['id'] = $row['id'];
            break;
        }
    }
}

?>