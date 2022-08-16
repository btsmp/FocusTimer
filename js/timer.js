export function Timer() {    
    let minutesDisplay = document.querySelector("#minutes")
    let secondsDisplay = document.querySelector("#seconds")
    let timerTimeOut
    let newMinutes


    function start() {

        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            if (minutes == 0 && seconds <= 0) {
                sounds.alarm()
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

            start()

        }, 1000)

    }

    function pause() {

        clearTimeout(timerTimeOut)
    }

    function reset() {

        if (!newMinutes) {
            minutesDisplay.textContent = 25
        } else {
            minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        }
        secondsDisplay.textContent = '00'

        clearTimeout(timerTimeOut)
    }

    function moreMin() {
        newMinutes = Number(minutesDisplay.textContent) + 5

        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    }

    function lessMin(){
        newMinutes = Number(minutesDisplay.textContent) - 5

        if (newMinutes <= 0) {
            newMinutes = 5
        }
    
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    }

    return {
        start,
        pause,
        reset,
        moreMin,
        lessMin,
    }
}