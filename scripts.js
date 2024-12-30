const result = document.querySelector('.result')

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
    } else if (human === 'paper' && ai === 'rock') {
        result.innerHTML = "Você ganhou!"
    } else {
        result.innerHTML = "Você perdeu para a IA"
    }
}

