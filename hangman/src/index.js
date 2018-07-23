import Hangman from './hangman'
import getPuzzle from './request'

const wordGuess = document.querySelector('#puzzle') 
const triesLeft = document.querySelector('#guesses')
let game 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    wordGuess.innerHTML = ''
    triesLeft.textContent = game.statusMessage

    Array.from(game.puzzle).forEach((letter) => {
        const spanChar = document.createElement('span')
        spanChar.textContent = letter
        wordGuess.appendChild(spanChar)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new Hangman(puzzle, 5)
    render()
}

const buttonEl = document.querySelector('#reset')
buttonEl.addEventListener('click', startGame)

startGame()