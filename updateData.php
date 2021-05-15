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
    $sessionid = $_SESSION['id'];

    if(empty($school)){
        $school = null;
    }
   
    $sql = "UPDATE user SET Vardas= '$name', Pavardė = '$surname', Paštas = '$email',
             Mokykla = '$school', Amžius = '$age', Slaptažodis = '$password' WHERE id= '$sessionid'";
    $rs = $con -> query($sql);

    if($rs){
        echo "updated";
        exit;
    } 
    else{
        echo "no";
    }

?>