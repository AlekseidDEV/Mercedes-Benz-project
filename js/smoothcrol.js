const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelectorAll('.main__scroll')
const NewArrey = [...linksHead, mainScroll]


console.log(linksHead);
console.log(mainScroll);
NewArrey.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1)
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})