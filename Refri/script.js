let list = document.querySelectorAll('.item')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let count = list.length
let active = 0

next.addEventListener('click',()=>{
   let Actives = document.querySelector('.active')
   Actives.classList.remove('active')

   active = active >= count-1 ? 0 :active+1
   list[active].classList.add('active')
})
prev.addEventListener('click',()=>{
    let Actives = document.querySelector('.active')
    Actives.classList.remove('active')

    active = active <= 0 ? count - 1 :active-1
    list[active].classList.add('active')
})