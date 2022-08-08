const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonLess = document.querySelector(".less")
const buttonPause = document.querySelector(".pause")
const cards = document.querySelectorAll(".card")
let minutesDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")
let timerTimeOut

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
    clearTimeout(timerTimeOut)
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = '00 '

})

buttonPlus.addEventListener("click", function () {
    let newMinutes = Number(minutesDisplay.textContent) + 5

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

buttonLess.addEventListener("click", function () {
    let newMinutes = Number(minutesDisplay.textContent) - 5

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
})

for (let card of cards){
    card.addEventListener("click", function(){
        card.classList.toggle("active")
    })
}

