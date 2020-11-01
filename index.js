// impossible to win implementation is not implemented
// testing unit is not implemented, but you play it from index.php

getFileText();
let data = {};
let answerText;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".difficulty-choice").forEach(difficulty => {
        difficulty.onclick = () => {
            resetGame();
            let choosedDifficultyValue = parseInt(difficulty.value);
            let choosedDifficultyClassName = difficulty.className;
            let choosedRandomText = chooseRandomText(choosedDifficultyValue);
            renderTextOptions(choosedRandomText, choosedDifficultyClassName);
        };
    })
});

function resetGame() {
    document.querySelector("#guess-remain").innerHTML = "4";
    document.querySelector("#choosed-answer").innerHTML = "";
    document.querySelector("#status-answer").innerHTML = "";
    document.querySelector("#text-choice").innerHTML = "";
}

function disabledAllAnswerOption() {
    document.querySelectorAll(".answer-text").forEach(option => {
        option.disabled = true;
    })
}

function checkCorrectPosition(choosedAnswer) {
    console.log(answerText)
    let answerTextArray = answerText.split("");
    let correctPosition = choosedAnswer.split("").filter((element, index) => {
        return element == answerTextArray[index];
    })
    return correctPosition;
}

function choosedAnswer(element) {
    element.disabled = true;
    let guessRemain = parseInt(document.querySelector("#guess-remain").innerHTML);
    let correctPosition = checkCorrectPosition(element.value);
    guessRemain--;
    let message = correctPosition.length + "/" + answerText.length + " correct";
    if(correctPosition.length == answerText.length) message = message + " - You win!";
    if(guessRemain == 0 && !message.includes("win")) message = message + " - You lose! - Answer: " + answerText;
    document.querySelector("#guess-remain").innerHTML = guessRemain;
    document.querySelector("#choosed-answer").innerHTML = element.value;
    document.querySelector("#status-answer").innerHTML = message;
    if(message.includes("win") || message.includes("lose")) disabledAllAnswerOption();
}

function renderTextOptions(texts, className) {
    texts.forEach(element => {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = element;
        btn.className = className + " mr-3 answer-text";
        btn.value = element;
        btn.onclick = () => {
            choosedAnswer(btn);
        };
        document.querySelector("#text-choice").appendChild(btn);
    });
}

function randomNumberGenerator(range, offset = 0) {
    return Math.floor(Math.random() * range) + offset;
}

function chooseRandomText(difficulty) {
    let amountTextChoice = randomNumberGenerator(11, 5);
    let choosedText = data[difficulty];
    let choosedRandomText = [];

    for(let i = 0; i < amountTextChoice ; i++) {
        choosedRandomText.push(choosedText[randomNumberGenerator(data[difficulty].length)]);
    }

    answerText = choosedRandomText[randomNumberGenerator(amountTextChoice)];
    return choosedRandomText;
}

function sortTextLength(text) {
    text = text.split("\n").forEach(element => {
        element = element.trim();
        if(data[element.length] == undefined) data[element.length] = [];
        data[element.length].push(element)
    });
}

function getFileText() {
    fetch('enable1.txt')
        .then(response => response.text())
        .then(response => sortTextLength(response))
}
