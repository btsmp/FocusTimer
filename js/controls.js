export function Controls({
    buttonPlay,
    buttonPause,
}) {
    function handle() {
        buttonPlay.classList.toggle("hide")
        buttonPause.classList.toggle("hide")
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }
    return {
        handle,
        reset,
    }
}