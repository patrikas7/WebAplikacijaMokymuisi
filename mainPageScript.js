$(document).ready(function(){
var signUpform = document.getElementById('signUpForm');
var signUpButton = document.getElementById('sign-up');
var logInForm = document.getElementById('logInForm');
var logInButton = document.getElementById('log-in');

//Paspaudus pele už prisijungimo ar registracijos formos jinai užsidaro
    window.onclick = function(event) {
  if (!signUpform.contains(event.target) && !signUpButton.contains(event.target)) {
        clearSignUpForm();
        signUpform.style.display = "none";
  }
  if(!logInForm.contains(event.target) && !logInButton.contains(event.target)){

      logInForm.style.display = "none";
  }
}

function clearSignUpForm(){
document.getElementById('name').value = '';
document.getElementById('surname').value = '';
document.getElementById('email').value = '';
document.getElementById('school').value = '';
document.getElementById('age').value = '';
document.getElementById('password').value = '';
document.getElementById('password-repeat').value = '';
}

function check(input){
var password = document.getElementById('password').value;
var passwordRepeat = document.getElementById('password-repeat').value;
if(password != "" && passwordRepeat != ""){
      if(password !=passwordRepeat){
          input.setCustomValidity('Slaptažodžiai turi suptapti')
      } else{
          input.setCustomValidity('');
      }
  }
}

var timer = null;
var timer2 = null;
$('#email').keydown(function(){
    clearTimeout(timer);
    timer = setTimeout(checkEmail, 1000)
});

function checkEmail(){
    var em = document.getElementById('email').value;
    var ac = "forSignUp";
    $.ajax({
        type: "POST",
        url: "checkemail.php",
        data: {"email" : em },
        success: function(data){        
           if(data == "exist"){
                email.setCustomValidity('Elektroninis paštas jau egzistuoja');
            } else{
                email.setCustomValidity('');
            }
        } 
    }); 
}

$('#password').keydown(function(){
    clearTimeout(timer2);
    timer2 = setTimeout(checkPassword, 1000)
});

function checkPassword(){
    var password = document.getElementById('password').value;
    if(password.length < 8){
        document.getElementById('password').setCustomValidity('Slaptažodį turi sudaryi bent 8 elementai');
    }else{
        document.getElementById('password').setCustomValidity('');
    }
}

$('#login').on('click',function(e){
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    $.ajax({
        type: "POST",
        url:"checkLogin.php",
        data: {email : email , password : password},
        success: function(data){
            if(data == "exist"){
                window.location.href = "http://localhost/webapp/mainPage.html";
            }else{
                document.getElementById('loginError').style.display = "block";
            }
        }
    })
})
});