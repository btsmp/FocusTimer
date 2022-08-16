export function Sounds() {

    const soundForest = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Floresta.wav?raw=true")
    const soundRain = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Chuva.wav?raw=true")
    const soundCoffeshop = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Cafeteria.wav?raw=true")
    const soundFirePlace = new Audio("https://github.com/ViiniciusGM/stage05-desafio01/blob/main/sounds/Lareira.wav?raw=true")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const cards = document.querySelectorAll(".card")
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

    function event() {
        buttonPressAudio.play()
    }

    function alarm(){
        kitchenTimer.play()
    }

    return{
        event,
        alarm,
    }
}