const checkbtn = document.querySelector('.checkbtn')
const enlaces = document.querySelector('.enlaces')
let animado = document.querySelectorAll(".animado")

function  mostrarScroll()  {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i <= animado.length-1; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 600 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba")
        }
    }

    

}


window.addEventListener('scroll', mostrarScroll)

checkbtn.addEventListener('click',()=>{
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    let visible = enlaces.classList.toggle("nav-menu_visible")
    if (visible===false) {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
    


})


const sobre_mi = document.querySelector('#sobre_mi')
const proyectos = document.querySelector('#proyectos')

sobre_mi.addEventListener('click',()=>{
    enlaces.classList.toggle("nav-menu_visible")
    document.getElementsByTagName("html")[0].style.overflow = "auto";
})

proyectos.addEventListener('click',()=>{
    enlaces.classList.toggle("nav-menu_visible")
    document.getElementsByTagName("html")[0].style.overflow = "auto";
})