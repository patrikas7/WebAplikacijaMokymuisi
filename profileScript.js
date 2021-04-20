function loadUserData(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var userObject = JSON.parse(this.responseText);
            document.getElementById("name").setAttribute('value',userObject.name);
            document.getElementById("surname").setAttribute('value',userObject.surname);
            document.getElementById("email").setAttribute('value',userObject.email);
            document.getElementById("school").setAttribute('value',userObject.school);
            document.getElementById("age").setAttribute('value',userObject.age);
        }
    };
    xmlhttp.open("GET", "profile.php", true);
    xmlhttp.send();
}

function checkEmail(){
    var email = document.getElementById('email').value;
    $.ajax({
        type: "POST",
        url: "checkEmailForUpdate.php?action=",
        data: {"email" : email},
        success: function (data) {
            if(data == "exist"){
                email.setCustomValidity('Elektroninis paštas jau egzistuoja');
            } else{
                email.setCustomValidity('');
            }
          }
    });
}