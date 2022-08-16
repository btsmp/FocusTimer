import { ThemeSwitch } from "./themeSwitch.js"
import { Sounds } from "./sounds.js"
import { Timer } from "./timer.js"
import { Controls } from "./controls.js"

const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonLess = document.querySelector(".less")
const buttonPause = document.querySelector(".pause")

const timer = Timer()
const sounds = Sounds()
const controls = Controls({
    buttonPlay,
    buttonPause,
})

buttonPlay.addEventListener("click", () => {
    controls.handle() 
    timer.start()
    sounds.event()
})

buttonPause.addEventListener("click", () => {
    controls.handle()
    timer.pause()
    sounds.event()
})

buttonStop.addEventListener("click", () => {
    controls.reset()
    timer.reset()
    sounds.event()
    
})

buttonPlus.addEventListener("click", () => {
    timer.moreMin()
})

buttonLess.addEventListener("click", () => {
    timer.lessMin()
})

ThemeSwitch()