const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonLess = document.querySelector(".less")
const buttonPause = document.querySelector(".pause")
const cards = document.querySelectorAll(".card")
let minutesDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")
let timerTimeOut
let newMinutes

function countdown() {
    timerTimeOut = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (minutes == 0 && seconds <= 0) {
            kitchenTimer.play()
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            return
        }

        if (seconds <= 0) {
            seconds = 60
            minutes--
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
        minutesDisplay.textContent = String(minutes).padStart(2, '0')

        countdown()

    }, 1000)
}

buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    countdown()
    buttonPressAudio.play()
})

buttonPause.addEventListener("click", () => {
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    clearTimeout(timerTimeOut)
    buttonPressAudio.play()
})

buttonStop.addEventListener("click", () => {
    if (!newMinutes) {
        minutesDisplay.textContent = 25
    } else {
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    }
    secondsDisplay.textContent = '00'
    clearTimeout(timerTimeOut)

    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPressAudio.play()

})

buttonPlus.addEventListener("click", () => {
    newMinutes = Number(minutesDisplay.textContent) + 5

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

buttonLess.addEventListener("click", () => {
    newMinutes = Number(minutesDisplay.textContent) - 5

    if (newMinutes <= 0) {
        newMinutes = 05
    }

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

// audio

const soundForest = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Floresta.wav?raw=true")
const soundRain = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Chuva.wav?raw=true")
const soundCoffeshop = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Cafeteria.wav?raw=true")
const soundFirePlace = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Lareira.wav?raw=true")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const volumeBars = document.querySelectorAll(".volume-bar")

const audios = [soundForest, soundRain, soundCoffeshop, soundFirePlace]

for (let i = 0; i < cards.length; i++) { //iterar os cartões e adicionar um evento para cada um deles

    cards[i].addEventListener('click', () => {

        if (!audios[i].paused) {

            audios[i].pause()
            cards[i].classList.remove('active')
            cards[i].lastElementChild.classList.remove('volume-bar-active')
            return
        }

        cards[i].classList.add('active')
        cards[i].lastElementChild.classList.add('volume-bar-active')
        audios[i].play()
        audios[i].loop = true
    })
}

for (let bar = 0; bar < volumeBars.length; bar++) { //iterar as barras de volume
    volumeBars[bar].addEventListener('change', () => {
        console.log(volumeBars[bar].value)
        audios[bar].volume = volumeBars[bar].value
    })
}

// switcher dark/light mode

const lightButton = document.querySelector("#light")
const darkButton = document.querySelector("#dark")
const rootElement = document.documentElement

const lightTheme = {
    '--bg': '#FFFFFF',
    '--text-color': 'hsla(240, 6%, 21%, 1)',
    '--fill-colors': '#323238',
    '--primary-color': 'hsla(240, 9%, 89%, 1)',
    '--secondary-color': 'hsla(194, 97%, 31%, 1)',
}
const darkTheme = {
    '--bg': '#121214',
    '--text-color': '#FFFFFF',
    '--fill-colors': '#C4C4CC',
    '--primary-color': '#29292E',
    '--secondary-color': '#0A3442',
}

lightButton.addEventListener("click", () => {
    changeTheme(darkTheme)
    lightButton.classList.toggle('hide')
    darkButton.classList.toggle('hide')
})

darkButton.addEventListener("click", () => {
    changeTheme(lightTheme)
    lightButton.classList.toggle('hide')
    darkButton.classList.toggle('hide')
})


function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}