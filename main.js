let cover = document.querySelector('.cover')
let consoleNav = document.querySelector('.console-nav')
let openConsole = document.querySelector('.open-console')
let closeConsole = document.querySelector('.close-console')
let itemsList = document.querySelectorAll('.console-nav li')

for (var i = 0; i < itemsList.length; i++) {
    itemsList[i].addEventListener("click", function() {
        closeConsoleNav()
    })
}

openConsole.onclick = function() {
    cover.style.display = "block",
    consoleNav.style.display = "block"
}

closeConsole.onclick = closeConsoleNav
cover.onclick = closeConsoleNav

function closeConsoleNav() {
    cover.style.display = "none",
    consoleNav.style.display = "none"
}