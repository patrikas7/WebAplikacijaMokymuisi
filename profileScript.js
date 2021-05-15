function loadUserData(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var userObject = JSON.parse(this.responseText);
            document.getElementById("nameAndSurname").innerHTML = userObject.name + " " + userObject.surname;
            document.getElementById("firstname").placeholder = userObject.name;
            document.getElementById("lastname").placeholder = userObject.surname;
            document.getElementById("inputEmail4").placeholder = userObject.email;
            document.getElementById("school").placeholder = userObject.school;
            document.getElementById("age").placeholder = userObject.age;
        }
    };
    xmlhttp.open("GET", "profile.php", true);
    xmlhttp.send(); 
}

function destroySession(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','./destroySession.php', true);
    xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
         window.location.href = "http://localhost/webapp/";
    }};
    xmlhttp.send(null);
  }

  