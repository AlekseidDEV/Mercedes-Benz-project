const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

modal.addEventListener('click', (event) => {
    console.log(event.target);
    const target = event.target
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})






