var testIndex;
function load(topic){
  testIndex = topic;
   function buildQuiz(){
     const output = [];
     myQuestions.forEach(
       (currentQuestion, questionNumber) => {
         const answers = [];
         for(letter in currentQuestion.answers){
           answers.push(
             `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
               ${letter} :
               ${currentQuestion.answers[letter]}
             </label>`
           );
         }
         output.push(
           `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join('')} </div>
           </div>`
         );
       }
     );
 
     quizContainer.innerHTML = output.join('');
   }
 
   function showResults(){
 
     const answerContainers = quizContainer.querySelectorAll('.answers');
     let numCorrect = 0;

     myQuestions.forEach( (currentQuestion, questionNumber) => {
       const answerContainer = answerContainers[questionNumber];
       const selector = `input[name=question${questionNumber}]:checked`;
       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
 
       if(userAnswer === currentQuestion.correctAnswer){
         numCorrect++;
       }
     });
 
     resultsContainer.innerHTML = `${numCorrect} iš ${myQuestions.length}`;
     var paragraph = document.createElement('p');
     if(topic != "two"){
        paragraph.innerHTML = "Atskaymai: 1.a 2.b 3.c 4.d 5.e";
     }
     else if(topic == "two"){
      paragraph.innerHTML = "Atskaymai: 1.a 2.b 3.c 4.d";
     }
      
     resultsContainer.appendChild(paragraph);
     document.getElementById('prevTopic').style.display = "block";
     document.getElementById('nextTopic').style.display = "block";
   }

   function showSlide(n){
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
         previousButton.style.display = 'none';
      }
      else{
         previousButton.style.display = 'inline-block';
       }
       if(currentSlide === slides.length-1){
         nextButton.style.display = 'none';
         submitButton.style.display = 'inline-block';
       }
       else{
         nextButton.style.display = 'inline-block';
         submitButton.style.display = 'none';
       }
   }

   function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
 
   const quizContainer = document.getElementById('quiz');
   const resultsContainer = document.getElementById('results');
   const submitButton = document.getElementById('submit');
   var myQuestions;
   if(topic == "one"){
    myQuestions = [
      {
        question: "Kuris kintamojo tipas apibrėžia sveikus skaičius?",
        answers: {
          a: "int",
          b: "double",
          c: "char",
          d: "string",
          e: "Nei vienas iš išvardintų"
        },
        correctAnswer: "a"
      },
      {
        question: "Kuris kintamojo tipas apibrėžia trupmeninius skaičius?",
        answers: {
          a: "int",
          b: "double",
          c: "char",
          d: "string",
          e: "Nei vienas iš išvardintų"
        },
        correctAnswer: "b"
      },
      {
        question: "Kuris kintamojo tipas apibrėžia simbolius?",
        answers: {
          a: "int",
          b: "double",
          c: "char",
          d: "string",
          e: "Nei vienas iš išvardintų"
        },
        correctAnswer: "c"
      },
      {
        question: "Kuris kintamojo tipas apibrėžia simbolių eilutę?",
        answers: {
        a: "int",
        b: "double",
        c: "char",
        d: "string",
        e: "Nei vienas iš išvardintų"
        },
        correctAnswer: "d"
      },
      {
        question: "Kuris kintamojo tipas apibrėžia sveikus skaičių masyvą?",
        answers: {
        a: "int",
        b: "double",
        c: "char",
        d: "string",
        e: "Nei vienas iš išvardintų"
        },
        correctAnswer: "e"
      }
    ];
  }

  else if(topic == "two"){
    myQuestions = [
      {
        question: "Kokią reikšmę saugo kintamasis x, kai string x; ?",
        answers: {
          a: "Tuščia",
          b: "a",
          c: "Klaida",
          d: "zodis"
        },
        correctAnswer: "a"
      },
      {
        question: "Kokią reikšmę saugo kintamasis x, kai string x = \"a\"; ?",
        answers: {
          a: "Tuščia",
          b: "a",
          c: "Klaida",
          d: "zodis"
        },
        correctAnswer: "b"
      },
      {
        question: "Kokią reikšmę saugo kintamasis x, kai string x = \'a\'; ?",
        answers: {
          a: "Tuščia",
          b: "a",
          c: "Klaida",
          d: "zodis"
        },
        correctAnswer: "c"
      },
      {
       question: 'Kokią reikšmę saugo kintamasis x, kai string x = "zodis"; ?',
       answers: {
        a: "Tuščia",
        b: "a",
        c: "Klaida",
        d: "zodis"
       },
       correctAnswer: "d"
      }
    ];
  }

  else if(topic == "three"){
    myQuestions = [
      {
        question: "Kam skirtas for ciklas?",
        answers: {
          a: "Atlikti tam tikrus veiksmus nurodytu kiekiu",
          b: "Kai tiksliai žinome kiek kartų reikės jį sukti",
          c: "Kabliataškiu",
          d: "Amžinas ciklas",
          e: "Kai sakinyje sąlyga neatitinka"
        },
        correctAnswer: "a"
      },
      {
        question: "Kada naudojamas for ciklas?",
        answers: {
          a: "Atlikti tam tikrus veiksmus nurodytu kiekiu",
          b: "Kai tiksliai žinome kiek kartų reikės jį sukti",
          c: "Kabliataškiu",
          d: "Amžinas ciklas",
          e: "Kai sakinyje sąlyga neatitinka"
        },
        correctAnswer: "b"
      },
      {
        question: "Kuo atskiriama kiekviena vieta for cikle?",
        answers: {
          a: "Atlikti tam tikrus veiksmus nurodytu kiekiu",
          b: "Kai tiksliai žinome kiek kartų reikės jį sukti",
          c: "Kabliataškiu",
          d: "Amžinas ciklas",
          e: "Kai sakinyje sąlyga neatitinka"
        },
        correctAnswer: "c"
      },
      {
       question: "Kokia problema gali ištikti rašant for ciklą?",
       answers: {
        a: "Atlikti tam tikrus veiksmus nurodytu kiekiu",
        b: "Kai tiksliai žinome kiek kartų reikės jį sukti",
        c: "Kabliataškiu",
        d: "Amžinas ciklas",
        e: "Kai sakinyje sąlyga neatitinka"
       },
       correctAnswer: "d"
      },
      {
        question: "Kada for ciklas sustoja?",
        answers: {
         a: "Atlikti tam tikrus veiksmus nurodytu kiekiu",
         b: "Kai tiksliai žinome kiek kartų reikės jį sukti",
         c: "Kabliataškiu",
         d: "Amžinas ciklas",
         e: "Kai sakinyje sąlyga neatitinka"
        },
        correctAnswer: "e"
       }
    ];
  }

  else if(topic == "four"){
    myQuestions = [
      {
        question: "Kam skirtas while ciklas?",
        answers: {
          a: "Atlikti veiksmus kol galioja sąlyga",
          b: "Kai tiksliai nežinome kiek kartų reikės jį sukti",
          c: "Sąlygos sakinys",
          d: "Amžinas ciklas",
          e: "Kai sąlyga neatitinka"
        },
        correctAnswer: "a"
      },
      {
        question: "Kada naudojamas while ciklas?",
        answers: {
          a: "Atlikti veiksmus kol galioja sąlyga",
          b: "Kai tiksliai nežinome kiek kartų reikės jį sukti",
          c: "Sąlygos sakinys",
          d: "Amžinas ciklas",
          e: "Kai sąlyga neatitinka"
        },
        correctAnswer: "b"
      },
      {
        question: "Kas yra while sakinio skliaustuose?",
        answers: {
          a: "Atlikti veiksmus kol galioja sąlyga",
          b: "Kai tiksliai nežinome kiek kartų reikės jį sukti",
          c: "Sąlygos sakinys",
          d: "Amžinas ciklas",
          e: "Kai sąlyga neatitinka"
        },
        correctAnswer: "c"
      },
      {
       question: "Kokia problema gali ištikti rašant while ciklą?",
       answers: {
        a: "Atlikti veiksmus kol galioja sąlyga",
        b: "Kai tiksliai nežinome kiek kartų reikės jį sukti",
        c: "Sąlygos sakinys",
        d: "Amžinas ciklas",
        e: "Kai sąlyga neatitinka"
       },
       correctAnswer: "d"
      },
      {
        question: "Kada while ciklas sustoja?",
        answers: {
          a: "Atlikti veiksmus kol galioja sąlyga",
          b: "Kai tiksliai nežinome kiek kartų reikės jį sukti",
          c: "Sąlygos sakinys",
          d: "Amžinas ciklas",
          e: "Kai sąlyga neatitinka"
        },
        correctAnswer: "e"
       }
    ];
  }

  else if(topic == "five"){
    myQuestions = [
      {
        question: "Kam skirtas if sakinys?",
        answers: {
          a: "Įvykdyti kodo dalį, jei sąlyga atitinka",
          b: "Įvykdyti kodo dalį, jei sąlyga if neatitiko",
          c: "AND, OR",
          d: "Blogai parašyta sąlyga arba blogi operatoriai",
          e: "else nebūtinas"
        },
        correctAnswer: "a"
      },
      {
        question: "Kam skirtas else sakinys?",
        answers: {
          a: "Įvykdyti kodo dalį, jei sąlyga atitinka",
          b: "Įvykdyti kodo dalį, jei sąlyga if neatitiko",
          c: "AND, OR",
          d: "Blogai parašyta sąlyga arba blogi operatoriai",
          e: "else nebūtinas"
        },
        correctAnswer: "b"
      },
      {
        question: "Kokiais operatoriais galima sujungti logines sąlygas?",
        answers: {
          a: "Įvykdyti kodo dalį, jei sąlyga atitinka",
          b: "Įvykdyti kodo dalį, jei sąlyga if neatitiko",
          c: "AND, OR",
          d: "Blogai parašyta sąlyga arba blogi operatoriai",
          e: "else nebūtinas"
        },
        correctAnswer: "c"
      },
      {
       question: "Kokia problema gali ištikti rašant if sakinį?",
       answers: {
        a: "Įvykdyti kodo dalį, jei sąlyga atitinka",
        b: "Įvykdyti kodo dalį, jei sąlyga if neatitiko",
        c: "AND, OR",
        d: "Blogai parašyta sąlyga arba blogi operatoriai",
        e: "else nebūtinas"
       },
       correctAnswer: "d"
      },
      {
        question: "Ar else yra būtinas norint if sakiniui veikti?",
        answers: {
          a: "Įvykdyti kodo dalį, jei sąlyga atitinka",
          b: "Įvykdyti kodo dalį, jei sąlyga if neatitiko",
          c: "AND, OR",
          d: "Blogai parašyta sąlyga arba blogi operatoriai",
          e: "else nebūtinas"
        },
        correctAnswer: "e"
       }
    ];
  }

  else if(topic == "six"){
    myQuestions = [
      {
        question: "Kam skirtas switch sakinys?",
        answers: {
          a: "Atlikti skirtingas funkcijas",
          b: "Nurodo ką daryti atėjus tam tikrai reikšmei",
          c: "Atskirti case sakinius vienas nuo kito",
          d: "int ir string",
          e: "break būtinas"
        },
        correctAnswer: "a"
      },
      {
        question: "Kam skirtas case sakinys?",
        answers: {
          a: "Atlikti skirtingas funkcijas",
          b: "Nurodo ką daryti atėjus tam tikrai reikšmei",
          c: "Atskirti case sakinius vienas nuo kito",
          d: "int ir string",
          e: "break būtinas"
        },
        correctAnswer: "b"
      },
      {
        question: "Kam skirtas break sakinys?",
        answers: {
          a: "Atlikti skirtingas funkcijas",
          b: "Nurodo ką daryti atėjus tam tikrai reikšmei",
          c: "Atskirti case sakinius vienas nuo kito",
          d: "int ir string",
          e: "break būtinas"
        },
        correctAnswer: "c"
      },
      {
       question: "Kokius tipus gali tikrinti switch?",
       answers: {
        a: "Atlikti skirtingas funkcijas",
        b: "Nurodo ką daryti atėjus tam tikrai reikšmei",
        c: "Atskirti case sakinius vienas nuo kito",
        d: "int ir string",
        e: "break būtinas"
       },
       correctAnswer: "d"
      },
      {
        question: "Ar break yra būtinas norint switch sakiniui veikti?",
        answers: {
          a: "Atlikti skirtingas funkcijas",
          b: "Nurodo ką daryti atėjus tam tikrai reikšmei",
          c: "Atskirti case sakinius vienas nuo kito",
          d: "int ir string",
          e: "break būtinas"
        },
        correctAnswer: "e"
       }
    ];
  }

  else if(topic == "seven"){
    myQuestions = [
      {
        question: "Kokia biblioteka reikalinga dirbti su failais?",
        answers: {
          a: "fstream",
          b: "ifstream ir ofstream",
          c: "Atidaryti, dirbti, uždaryti",
          d: "Pamirštama failą uždaryti",
          e: "Jis užsirakina ir jo negalima redaguoti"
        },
        correctAnswer: "a"
      },
      {
        question: "Kokie yra du pagrindiniai tipai darbui su failais?",
        answers: {
          a: "fstream",
          b: "ifstream ir ofstream",
          c: "Atidaryti, dirbti, uždaryti",
          d: "Pamirštama failą uždaryti",
          e: "Jis užsirakina ir jo negalima redaguoti"
        },
        correctAnswer: "b"
      },
      {
        question: "Kokia yra seka darbo su failais?",
        answers: {
          a: "fstream",
          b: "ifstream ir ofstream",
          c: "Atidaryti, dirbti, uždaryti",
          d: "Pamirštama failą uždaryti",
          e: "Jis užsirakina ir jo negalima redaguoti"
        },
        correctAnswer: "c"
      },
      {
       question: "Kokia yra dažna klaida dirbant su failais?",
       answers: {
        a: "fstream",
        b: "ifstream ir ofstream",
        c: "Atidaryti, dirbti, uždaryti",
        d: "Pamirštama failą uždaryti",
        e: "Jis užsirakina ir jo negalima redaguoti"
       },
       correctAnswer: "d"
      },
      {
        question: "Kas atsitinka kai pamirštama uždaryti failą?",
        answers: {
          a: "fstream",
          b: "ifstream ir ofstream",
          c: "Atidaryti, dirbti, uždaryti",
          d: "Pamirštama failą uždaryti",
          e: "Jis užsirakina ir jo negalima redaguoti"
        },
        correctAnswer: "e"
       }
    ];
  }


   buildQuiz();
   const previousButton = document.getElementById('previous');
   const nextButton = document.getElementById('next');
   const slides = document.querySelectorAll('.slide');
   let currentSlide = 0;

   showSlide(currentSlide);
   submitButton.addEventListener('click', showResults);
   previousButton.addEventListener("click", showPreviousSlide);
   nextButton.addEventListener("click", showNextSlide);
 };

 function redirectFirst(){
   var tempProgress;
   var location;
   var addedProgress = 15;
  if(testIndex == "one"){
    tempProgress = 15;
    location = "http://localhost/webapp/apie_string.html";
  }
  else if (testIndex == "two"){
    tempProgress = 30;
    location = "http://localhost/webapp/apie_for_cikla.html";
  }
  else if (testIndex == "three"){
    tempProgress = 45;
    location = "http://localhost/webapp/apie_while_cikla.html";
  }

  else if (testIndex == "four"){
    tempProgress = 60;
    location = "http://localhost/webapp/apie_if.html";
  }
  else if (testIndex == "five"){
    tempProgress = 75;
    location = "http://localhost/webapp/apie_switch.html";
  }

  else if (testIndex == "six"){
    tempProgress = 90;
    location = "http://localhost/webapp/apie_failus.html";
  }

  else if (testIndex == "seven"){
    tempProgress = 100;
    location = "http://localhost/webapp/mainPage.html";
    addedProgress = 10;
  }

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
      var userObject = JSON.parse(this.responseText);
      if(userObject.progress < tempProgress){
          var userProgress = parseInt(userObject.progress) + addedProgress;
          $.ajax({
              type: "POST",
              url: "updateProgress.php",
              data: {"progress" : userProgress},
              success: function(data){
                  if(data == "updated"){
                      window.location.href = location;
                  }
                  else{
                      console.log(data);
                  }
              }
          });
      }
      else{
          window.location.href = location;
      }
  }};
  xmlhttp.open("GET", "profile.php", true);
  xmlhttp.send();
}



function redirectBack() {
  if(testIndex == "one")
    window.location.href = "http://localhost/webapp/apie_kintamuosius.html";
  else if (testIndex == "two")
    window.location.href = "http://localhost/webapp/apie_string.html";
  else if(testIndex == "three")
    window.location.href = "http://localhost/webapp/apie_for_cikla.html";
  else if (testIndex == "four")
    window.location.href = "http://localhost/webapp/apie_while_cikla.html";
  else if (testIndex == "five")
    window.location.href = "http://localhost/webapp/apie_if.html";
  else if (testIndex == "six")
    window.location.href = "http://localhost/webapp/apie_switch.html";
  else if (testIndex == "seven")
    window.location.href = "http://localhost/webapp/apie_failus.html";
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