let dayNigth = document.querySelector('.dayNigth')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

function  modoDarkWhith() {
    body.classList.toggle('dark')
    dayNigth.classList.toggle('active')
}

function menu(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}