export function ThemeSwitch(){    
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

    function change(theme) {
        for (let prop in theme) {
            changeProperty(prop, theme[prop])
        }
    }
    
    function changeProperty(property, value) {
        rootElement.style.setProperty(property, value)
    }

    lightButton.addEventListener("click", () => {
        change(darkTheme)
        lightButton.classList.toggle('hide')
        darkButton.classList.toggle('hide')
    })
    
    darkButton.addEventListener("click", () => {
        change(lightTheme)
        lightButton.classList.toggle('hide')
        darkButton.classList.toggle('hide')
    })
    
    return {
        change
    }
}