// setting variable for loss, win, blank spaces, and guesses remaining
var win = 0;
var loss = 0;
var guessesLeft = 12;
var letterUsed = [];
var blankSpace = [];
var randomWord = "";


// Make the random word array 
var words = ["ephraim", "chrom", "corrin", "ike", "lucina", "marth", "robin", "alm", "celica", "byleth", "roy", "eirika", "lyn"];

// Computer chooses a random word




// function to create a random word
var getNewWord = function () {
    var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    console.log(randomWord);



    return randomWord;


}
// create function to intialize the game 

var intializeGame = function () {
    randomWord = getNewWord();
    wordLength = randomWord.length;

    guessesLeft = 12;

    document.getElementById("guess-remaining").innerHTML = guessesLeft;

    blankSpace = [];
    for (var i = 0; i < randomWord.length; i++) {
        blankSpace[i] = "_";

    }

    document.getElementById("play-area").innerHTML = blankSpace;
    // Computer displays an image to the img div
    if (randomWord === words[0].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Ephraim.png'>"
    }
    else if (randomWord === words[1].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Chrom.png'>"
    }
    else if (randomWord === words[2].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Corrin.png'>"
    }
    else if (randomWord === words[3].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Ike.png'>"
    }
    else if (randomWord === words[4].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Lucina.png'>"
    }
    else if (randomWord === words[5].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Marth.png'>"
    }
    else if (randomWord === words[6].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Robin.png'>"
    }
    else if (randomWord === words[7].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Alm.png'>"
    }
    else if (randomWord === words[8].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Celica.png'>"
    }
    else if (randomWord === words[9].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Byleth.png'>"
    }
    else if (randomWord === words[10].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Roy.png'>"
    }
    else if (randomWord === words[11].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Eirika.png'>"
    }
    else if (randomWord === words[12].toLowerCase()) {

        document.getElementById("img").innerHTML = "<img src = 'assets/images/Lyn.png'>"
    }

}

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess)

    var isGuessWrong = true;

    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {

            console.log(wordLength);
            isGuessWrong = false;
            if (blankSpace[i] !== userGuess) {
                wordLength--;
                blankSpace[i] = userGuess;
            }
            document.getElementById("play-area").innerHTML = " " + blankSpace.join(",");
        }
    }
    if (isGuessWrong === true) {
        if (guessesLeft > 0) {
            var found = false;
            for (var i = 0; i < letterUsed.length; i++) {
                if (userGuess === letterUsed[i]) {
                    found = true;
                }
            }
            if (found !== true) {
                letterUsed.push(userGuess);
                document.getElementById("letters-guessed").innerHTML = " " + letterUsed.join(",");
                guessesLeft--;
                document.getElementById("guess-remaining").innerHTML = guessesLeft;
            }
        }
        if (guessesLeft === 0) {
            loss++;
            document.getElementById("loss").innerHTML = loss;
            // alert("You lost! Some kind of tactician you are! Click the screen to try again!");
            intializeGame();

        }

    }

    if (wordLength === 0) {
        win++;
        document.getElementById("wins").innerHTML = win;
        // alert("You win! You are quite the tactician! Click the screen to try again");
        intializeGame();


    }

}

intializeGame();

