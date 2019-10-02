

var words = [
    "TIGER",
    "MONKEY",
    "JAGUAR",
    "SNAKE",
    "BUGS",
    "TREES",
    "VINES"
]

var game = {
    wins: 0,
    guessLeft: 6,
    space: "_",
    correctLetter: 0,
    characterArr: [],
    placeHolder: [],
    substitutions: [],
    alreadyGuessed: []

};



document.onkeyup = function startGame(event) {


    var randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    console.log("Word Length: " + randWord.length);


    game.characterArr = randWord.split("");


    game.placeHolder = game.space.repeat(randWord.length);


    game.substitutions = game.placeHolder.split("");


    var displayWord =
        "<p> Word: " + game.substitutions.join('') + "  </p>";
    document.querySelector("#game").innerHTML = displayWord;
    document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
    document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
    document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " ";
    document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";


    document.onkeyup = function doSecond(e) {

        if (e.which <= 90 && e.which >= 65) {


            var userGuess = e.key.toUpperCase();

            for (i = 0; i < game.characterArr.length; i++) {
                if (userGuess === game.characterArr[i]) {
                    game.substitutions[i] = userGuess;
                    var displayWord =
                        "<p> Word: " + game.substitutions.join('') + "  </p>";
                    document.querySelector("#game").innerHTML = displayWord;
                }
            }

            if (game.characterArr.includes(userGuess)) {
                game.correctLetter++;
                document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
                document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
                document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " ";
                document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";

            } else {

                for (j = 0; j <= game.alreadyGuessed.length; j++) {
                    if (game.alreadyGuessed.includes(userGuess)) {
                    } else {
                        game.alreadyGuessed.push(userGuess);
                        game.guessLeft--;
                        var guessedLetters =
                            "<p> " + game.alreadyGuessed + "  </p>";
                        document.querySelector("#letters").innerHTML = guessedLetters;
                    }
                }
                document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
                document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
                document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " "
                document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";
            }

            if (game.guessLeft === 0) {
                alert("YOU LOSE!");
                youLose();
            }

            if (game.substitutions.join("") == randWord) {
                game.wins++;
                game.guessLeft = 6;
                game.correctLetter = 0;
                game.alreadyGuessed = [];
                alert("YOU WIN!");
                startGame(event);

            }

            function youLose() {
                var tryAgain = confirm("Try Again?");

                if (tryAgain) {
                    game.guessLeft = 6;
                    game.correctLetter = 0;
                    game.wins = 0;
                    game.alreadyGuessed = [];
                    startGame(event);
                }
                else {
                    document.write("Thank You For Playing");
                }

            }
        } else { }

    }
}


