const barras = document.querySelector('.barras')
const menu = document.querySelector('.menu')

barras.addEventListener('click', ()=>(menu.classList.toggle("holamenu"))
)

window.addEventListener('click',e=>{
    if(menu.classList.contains('holamenu') && e.target != menu && e.target != barras ){
        menu.classList.toggle("holamenu")
    }
})