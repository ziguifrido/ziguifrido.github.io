const theme = sessionStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

document.addEventListener("DOMContentLoaded", () => { 
  ToggleDarkMode(theme)
})

const ToggleMenu = () => {
  document.getElementsByClassName("navbar-list")[0].classList.toggle('show')
}

const ToggleDarkMode = (theme) => {
  document.body.className = ''
  document.body.classList.add(theme)
  sessionStorage.setItem('theme', theme)
}
