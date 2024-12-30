const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const aiScore = document.querySelector('#ai-score')

let humanScoreNumber = 0
let aiScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playAI())
}

const playAI = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, ai) => {

    console.log('Humano: ' + human + " IA: " + ai)

    if (human === ai) {
        result.innerHTML = "Deu empate!"
    } else if ((human === 'paper' && ai === 'rock') || (human === 'rock' && ai === 'scissors') || (human === 'scissors' && ai === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        aiScoreNumber++
        aiScore.innerHTML = aiScoreNumber
        result.innerHTML = "Você perdeu para a IA"
    }
}

