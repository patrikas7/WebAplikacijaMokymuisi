<?php

    class User{
        public $name;
        public $surname;
        public $email;
        public $school;
        public $age;
        public $progress;
        public $password;

        function set_name($name){
            $this->name = $name;
        }

        function set_surname($surname){
            $this->surname = $surname;
        }

        function set_email($email){
            $this->email = $email;
        }

        function set_school($school){
            $this->school = $school;
        }

        function set_age($age){
            $this->age = $age;
        }

        function set_progress($progress){
            $this->progress = $progress;
        }

        function set_password($password){
            $this->password = $password;
        }
    }


    session_start();
    $con = mysqli_connect('localhost','root','','usersdb');
    $user = new User();

    if(!$con){
        die('Prisijungti nepavyko: ' .mysqli_connect_error());
    }
    
    $sessionid = $_SESSION['id'];
    $sql = "SELECT * FROM `user` WHERE id= $sessionid";

    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        
        while($row = $result->fetch_assoc()){  
            $user->set_name($row['Vardas']);
            $user->set_surname($row["Pavardė"]);
            $user->set_email($row["Paštas"]);
            $user->set_school($row["Mokykla"]);
            $user->set_age($row["Amžius"]);
            $user->set_progress($row["Progresas"]);
            $user->set_password($row["Slaptažodis"]);

        }
        $myJSON = json_encode($user);
        echo $myJSON;
       
    } else{
        echo "Error";
    }
    

    $con->close();
?>