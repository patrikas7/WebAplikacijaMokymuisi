<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="mainPageStyle.css">
    <link rel="stylesheet" href="MainPageMediaQueries.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="ajax-script.js"></script>
    <script src="jquery-3.5.1.min.js"></script>
    <script src="mainPageScript.js"></script>
    <title>C++ is Fun</title>
</head>
<body>

<!--Headerio sekcija su logotipu ir listu, kuriame yra du mygtukai("temos" ir "apie puslapį")-->
<section id="header">
    <ul id="navbar">
        <li><img src="tlogo.png" alt="logo" class="logo"></li>
		<li><a href="about.html" class="brk-btn">Apie projektą</a></li>
		<li><a href="#outro" class="brk-btn">Apie puslapį</a></li>
        <li><a href="#" class="brk-btn">Pradžia</a></li>
		
    </ul>
</section>

<!--Prisijungimo ir užsiregistravimo mygtuku sekcija-->
    <section id="login-section">
        <div class="container">
     <div class="title">
            <p>C++  kursai moksleiviams</p>
        </div>
        <div class="login-container">
            <table class="loginGrid-item">
                <tr>
                    <td><button id="log-in" onclick="document.getElementById('logInForm').style.display='block'" class="brk-btn login-button">Prisijungti</button></td>
                </tr>
            </table>
            <table class="loginGrid-item">
                <tr>
                    <td><button id="sign-up" onclick="document.getElementById('signUpForm').style.display='block';" class="brk-btn login-button">Sukurti paskyrą</button></td>
                </tr>
            </table>
			
        </div>
    </div>
    </section>

<!--Prisijungimo formos sekcija(pasirodo tik paspaudus mygtuką "Prisijungti")-->
    <div id="logInForm" class="formClass">
        <form action="checkLogIn.php" method="POST" class="logIn-content">
            <div class="signUp-container logIn-container">
                <span id="close-form" onclick="document.getElementById('logInForm').style.display='none'"  class="closeForm">&times;</span>
                <h1>Vartotojo prisijungimas</h1>
                <hr>
                <input type="text" id="loginEmail" placeholder="Elektroninis paštas" name="email" class="form_field"  required>
                <input type="password" id="loginPassword" placeholder="Slaptažodis" name="password" class="form_field"  required>
                <h1 id="loginError" style="display: none; font-size: 20px">Neteisingas vartotojo elektroninis paštas arba slaptažodis</h1>
                <div class="confirm-logIn">
                    <button type="button" class="brk-btn creata-account" id="login">Prisijungti</button>
                </div>
            </div>
        </form>
    </div>

<!--Registracijos formos sekcija(pasirodo tik paspaudus mygtuką "Sukurti paskyrą")-->
    <div id="signUpForm" class="formClass">
        <form action="connect.php" method="POST" id="signForm" class="signUp-content">
            <div class="signUp-container">
                <span id="close-form" onclick="document.getElementById('signUpForm').style.display='none'; clearSignUpForm()"class="closeForm">&times;</span>
                <h1>Vartotojo registracija</h1>
                <p>Užpildykite visus registracijos laukus</p>
                <hr>
                <input type="text" id="name" placeholder="Vardas" name="name" class="form_field"  required>

                <input type="text" id="surname" placeholder="Pavardė" name="surname" class="form_field" required>

                <input type="text" id="email" placeholder="Elektroninis paštas" name="email" class="form_field"  required>

                <input type="text" id="school" placeholder="Mokykla" name="school" class="form_field" >

                <input type="text" id="age" placeholder="Amžius" name="age" class="form_field"  required>
  
                <input type="password" id="password" placeholder="Slaptažodis" name="password" class="form_field" oninput="check(this)" required>

                <input type="password" id="password-repeat" placeholder="Slaptažodžio pakartojimas" name="password-repeat" class="form_field" oninput="check(this)" required>

                <div class="confirm-signUp">
                    <button type="submit" id="submit" class="brk-btn creata-account">Sukurti paskyrą</button>
                </div>

            </div>
        </form>
    </div> 
    <section id="outro">

        <div class="board">
			<div class="grid-item">
				<table>
					<tr>
						<td><img class="image" src="c++.png" alt=""></td>
					</tr>
					<tr>
						<td><h3>C++ pagrindai</h3></td>
					</tr>
				</table>
			</div>
			<div class="grid-item">
				<table>
					<tr>
						<td><img class="image" src="testas.png" alt=""></td>
					</tr>
					<tr>
						<td><h3>Testai, kur galėsite pasitikrinti savo žinias</h3></td>
					</tr>
				</table>
			</div>
			<div class="grid-item">
				<table>
					<tr>
						<td><img class="image" src="compiler.png" alt=""></td>
					</tr>
					<tr>
						<td><h3>Aplinka, kurioje patys galėsite rašyti savo programas</h3></td>
					</tr>
				</table>
			</div>
			<div class="grid-item">
				<table>
					<tr>
						<td><img class="image" src="coding.png" alt=""></td>
					</tr>
					<tr>
						<td><h3>Pavyzdinio kodo fragmentai</h3></td>
					</tr>
				</table>
			</div>

			<div class="grid-item">
				<table>
					<tr>
						<td><img class="image" src="prizas.png" alt=""></td>
					</tr>
					<tr>
						<td><h3>Taškų kaupimo sistema, kurioje aktyviausi mokiniai galės laimėti prizus!</h3></td>
					</tr>
				</table>
			</div>
			<div class="grid-item">
				<table>
					<tr>
						<td><img class="image" src="like.png" alt=""></td>
					</tr>
					<tr>
						<td><h3>Kursai padės pasiruošti informatikos VBE!</h3></td>
					</tr>
				</table>
			</div>

		</div>
    </section>

    <section class="info">

        <div id="topics" class="topic-container">
            <h1>Kurse esančios temos</h1>
            <hr>
        <ol>
            <li class="first"><span>Kintamieji - sužinosite pagrindinius kalbos kintamuosius su kuriais galėsite atlikt veiksmus</span></li>
            <li class="two"><span>Masyvai - sužinosite apie duomenų saugojimo struktūrų ir išmoksite su ją dirbti</span></li>
            <li class="three"><span>Ciklai - išmoksite iteruoti per duomenis ciklų pagalba</span></li>
            <li class="four"><span>Duomenų skaitymas ir rašymas į failą - išmoksite darbui reikalingus duomenis gauti iš failo</span></li>
            <li class="five"><span>Metodai ir funkcijos - sužinosite, kaip kodą skaldyti į skirtingas funkcijas ir metodus</span></li>
        </ol>
        </div>
    </section>
</body>
</html>