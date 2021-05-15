<?php

$con = mysqli_connect('localhost','root','','usersdb');

if(!$con){
    die('Prisijungti nepavyko: ' .mysqli_connect_error());
}

$email = $_POST['email'];
$sessionid = $_SESSION['id'];

$query = "SELECT `Vardas` FROM `user` WHERE Paštas=? AND id!=$sessionid";
if ($stmt = $con->prepare($query)){

    $stmt->bind_param("s", $email);

    if($stmt->execute()){
        $stmt->store_result();

        $email_check= "";         
        $stmt->bind_result($email_check);
        $stmt->fetch();

        if ($stmt->num_rows>0){
            echo "exist";
        exit;
        } else{
            echo "dosent exist";
        }
    }
}

?>