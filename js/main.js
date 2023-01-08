const lightImgWrapper = document.querySelector('.light-img-wrapper')
const body = document.querySelector('body')
const mainContentList = document.querySelector('.main-conten__list')
const searchFormInput = document.querySelector('.search-form__input')
const elLightImg = document.querySelector('.light-img')
const elDarkImg = document.querySelector('.dark-img')

const modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null
if (modeFromLocal) {
    body.classList.toggle('dark-mode')
    mainContentList.style = `
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    `
    searchFormInput.style = `
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    `
    elLightImg.classList.toggle('hidden')
    elDarkImg.classList.toggle('hidden')
}

lightImgWrapper.addEventListener('click', (e) => {
    body.classList.toggle('dark-mode')

    mainContentList.style = `
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    `
    searchFormInput.style = `
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    `

    elLightImg.classList.toggle('hidden')
    elDarkImg.classList.toggle('hidden')
    modeFromLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark')
})