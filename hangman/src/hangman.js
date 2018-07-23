class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    get puzzle() {
        let guessed = '';
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                guessed += letter;
            }
            else {
                guessed += '*';
            }
        });
        return guessed;
    }
    makeGuess(letter) {
        letter = letter.toLowerCase();
        const isUnique = !this.guessedLetters.includes(letter);
        const isBadGuess = !this.word.includes(letter);
        if (this.status !== 'playing') {
            return;
        }
        if (isUnique) {
            this.guessedLetters.push(letter);
            if (isBadGuess) {
                this.remainingGuesses--;
            }
        }
        this.updateStatus();
    }
    updateStatus() {
        const finished = this.word.join('') === this.puzzle;
        const noMoreGuesses = this.remainingGuesses === 0;
        if (finished) {
            this.status = 'finished';
        }
        else if (noMoreGuesses) {
            this.status = 'failed';
        }
        console.log(this.status);
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return 'Guesses left: ' + this.remainingGuesses;
        }
        else if (this.status === 'finished') {
            return 'Great work! You guessed the word.';
        }
        else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`;
        }
    }
}

export { Hangman as default }