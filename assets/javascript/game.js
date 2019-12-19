// setting variable for loss, win, blank spaces, and guesses remaining
var win = 0;
var loss = 0;
var guessesLeft = 12;
var letterUsed = [];
var blankSpace =[];
var randomWord = "";


// Make the random word array 
var words = ["ephraim", "chrom", "corrin", "ike", "lucina", "marth", "robin", "alm", "celica", "byleth", "roy", "eirika", "lyn"];

// Computer chooses a random word
 var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(randomWord);

var wordLength = randomWord.length 

document.getElementById("guess-remaining").innerHTML = guessesLeft;


// Computer displays a random word as a "_",
for (var i = 0; i < randomWord.length; i++){
    blankSpace[i] = "_" ;

    document.getElementById("play-area").innerHTML = blankSpace;

    if (randomWord === words[0].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Ephraim.png'>"
    } else  if (randomWord === words[1].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Chrom.png'>"
    } else  if (randomWord === words[2].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Corrin.png'>"
    } else  if (randomWord === words[3].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Ike.png'>"
    } else  if (randomWord === words[4].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Lucina.png'>"
    } else  if (randomWord === words[5].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Marth.png'>"
    } else  if (randomWord === words[6].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Robin.png'>"
    } else  if (randomWord === words[7].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Alm.png'>"
    } else  if (randomWord === words[8].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Celica.png'>"
    } else  if (randomWord === words[9].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Byleth.png'>"
    } else  if (randomWord === words[10].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Roy.png'>"
    } else  if (randomWord === words[11].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Eirika.png'>"
    } else  if (randomWord === words[12].toLowerCase()) {
        document.getElementById("img").innerHTML = "<img src = 'assets/images/Lyn.png'>"
    } 
    


// On key fuction for user guesses

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess)

    var isGuessWrong = true;

    for (var i= 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            wordLength--;
            console.log(wordLength);
            isGuessWrong = false;
            blankSpace[i] = userGuess;
            document.getElementById("play-area").innerHTML = " " + blankSpace.join(" ");
        }
    }
    if (isGuessWrong === true) {
        if (guessesLeft > 0 ) {
            letterUsed.push(userGuess);
            document.getElementById("letters-guessed").innerHTML = " " + letterUsed.join(" ");
            guessesLeft--;
            document.getElementById("guess-remaining").innerHTML = guessesLeft;
        }
        if (guessesLeft === 0) {
            loss++;
            document.getElementById("loss").innerHTML = loss;
        }
       
    }

    if (wordLength === 0) {
        win++;
        document.getElementById("wins").innerHTML = win;
    }

}

}