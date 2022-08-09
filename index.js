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
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (minutes == 0 && seconds <= 0) {
            return
        }

        if (seconds <= 0) {
            seconds = 60
            minutes--
        }


        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
        minutesDisplay.textContent = String(minutes).padStart(2, '0')

        console.log(seconds, minutes)

        countdown()

    }, 1000)
}

buttonPlay.addEventListener("click", function(){
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    countdown()
})

buttonPause.addEventListener("click", function(){
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener("click", function(){
    if (!newMinutes){
        minutesDisplay.textContent = 25
    } else {
        minutesDisplay.textContent = newMinutes
    }
    secondsDisplay.textContent = '00'
    clearTimeout(timerTimeOut)

    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

})

buttonPlus.addEventListener("click", function () {
    newMinutes = Number(minutesDisplay.textContent) + 5

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

buttonLess.addEventListener("click", function () {
    newMinutes = Number(minutesDisplay.textContent) - 5

    if (newMinutes < 0) {
        newMinutes = 0
    }

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})


// audio
const soundForest = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Floresta.wav?raw=true")
const soundRain = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Chuva.wav?raw=true")
const soundCoffeshop = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Cafeteria.wav?raw=true")
const soundFirePlace = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Lareira.wav?raw=true") 

const audios = [soundForest, soundRain, soundCoffeshop, soundFirePlace]
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', function(){
        cards[i].classList.toggle('active')
        audios[i].play()
    })
}
