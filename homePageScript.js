var userProgress = null;

function destroySession(){ 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','./destroySession.php', true);
    xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
         window.location.href = "http://localhost/webapp/";
    }};
    xmlhttp.send(null);
 }

 function loadProgress(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        var userObject = JSON.parse(this.responseText);
        document.getElementById("progressBar").setAttribute("style","width:"+userObject.progress+"%");
        document.getElementById("progressBarText").innerHTML = userObject.progress+"%";
        loadTopics(userObject.progress);
    }};
    xmlhttp.open("GET", "profile.php", true);
    xmlhttp.send();
    
 }

 function loadTopics(progress){
    userProgress = progress;
    if(progress == 15){
        document.getElementById("string").innerHTML = "Simbolių eilutės";
        document.getElementById("testas2").innerHTML = "Testas";
    }
    else if(progress == 30){
        document.getElementById("string").innerHTML = "Simbolių eilutės";
        document.getElementById("testas2").innerHTML = "Testas";
        document.getElementById("forCiklas").innerHTML = "For ciklai";
        document.getElementById("testas3").innerHTML = "Testas";
    }
    else if(progress == 45){
        document.getElementById("string").innerHTML = "Simbolių eilutės";
        document.getElementById("testas2").innerHTML = "Testas";
        document.getElementById("forCiklas").innerHTML = "For ciklai";
        document.getElementById("testas3").innerHTML = "Testas";
        document.getElementById("whileCiklas").innerHTML = "While ciklas";
        document.getElementById("testas4").innerHTML = "Testas";

    }
    else if(progress == 60){
        document.getElementById("string").innerHTML = "Simbolių eilutės";
        document.getElementById("testas2").innerHTML = "Testas";
        document.getElementById("forCiklas").innerHTML = "For ciklai";
        document.getElementById("testas3").innerHTML = "Testas";
        document.getElementById("whileCiklas").innerHTML = "While ciklas";
        document.getElementById("testas4").innerHTML = "Testas";
        document.getElementById("ifSakinys").innerHTML = "If sakinys";
        document.getElementById("testas5").innerHTML = "Testas";
    }
    else if(progress == 75){
        document.getElementById("string").innerHTML = "Simbolių eilutės";
        document.getElementById("testas2").innerHTML = "Testas";
        document.getElementById("forCiklas").innerHTML = "For ciklai";
        document.getElementById("testas3").innerHTML = "Testas";
        document.getElementById("whileCiklas").innerHTML = "While ciklas";
        document.getElementById("testas4").innerHTML = "Testas";
        document.getElementById("ifSakinys").innerHTML = "If sakinys";
        document.getElementById("testas5").innerHTML = "Testas";
        document.getElementById("switch").innerHTML = "Switch sakinys";
        document.getElementById("testas6").innerHTML = "Testas";
    }
    else if(progress == 90 || progress == 100){
        document.getElementById("string").innerHTML = "Simbolių eilutės";
        document.getElementById("testas2").innerHTML = "Testas";
        document.getElementById("forCiklas").innerHTML = "For ciklai";
        document.getElementById("testas3").innerHTML = "Testas";
        document.getElementById("whileCiklas").innerHTML = "While ciklas";
        document.getElementById("testas4").innerHTML = "Testas";
        document.getElementById("ifSakinys").innerHTML = "If sakinys";
        document.getElementById("testas5").innerHTML = "Testas";
        document.getElementById("switch").innerHTML = "Switch sakinys";
        document.getElementById("testas6").innerHTML = "Testas";
        document.getElementById("failai").innerHTML = "Darbas su failais";
        document.getElementById("testas7").innerHTML = "Testas";
    }

    if(userProgress == 100){
        document.getElementById("continue").innerHTML = "Kursai pabaigti!";
    }

    if(userProgress == 0){
        document.getElementById("continue").innerHTML = "Pradėti kursus";
    }

 }

 function redirect(){
    if(userProgress == 0){
        window.location.href = "http://localhost/webapp/apie_kintamuosius.html";
    }
    else if(userProgress == 15){
        window.location.href = "http://localhost/webapp/apie_string.html";
    }
    else if(userProgress == 30){
        window.location.href = "http://localhost/webapp/apie_for_cikla.html";
    }
    else if(userProgress == 45){
        window.location.href = "http://localhost/webapp/apie_while_cikla.html";
    }
    else if(userProgress == 60){
        window.location.href = "http://localhost/webapp/apie_if.html";
    }
    else if(userProgress == 75){
        window.location.href = "http://localhost/webapp/apie_switch.html";
    }
    else if(userProgress == 90){
        window.location.href = "http://localhost/webapp/apie_failus.html";
    }

 }

function redirectToPage(link, progress) {
    if(userProgress >= progress){
        window.location.href = "http://localhost/webapp/" + link + ".html";
    }
  }



