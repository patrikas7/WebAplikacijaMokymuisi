<?php
    session_start();
    $con = mysqli_connect('localhost','root','','usersdb');

    if(!$con){
        die('Prisijungti nepavyko: ' .mysqli_connect_error());
    }

    $progress = $_POST['progress'];
    $sessionid = $_SESSION['id'];
    $sql = "UPDATE user SET Progresas = '$progress' WHERE id = '$sessionid'";
    $rs = $con -> query($sql);
    if($rs){
        echo "updated";
        exit;
    } 
    else{
        echo "error";
    }
?>