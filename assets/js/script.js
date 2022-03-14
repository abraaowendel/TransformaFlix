
const show = document.getElementById('senha')
const label = document.getElementById('label-password')
const labelfloat = () => show.value.length > 0? label.classList.add('active'):label.classList.remove('active')
document.body.addEventListener('click', labelfloat)

document.querySelector('.show-password').addEventListener('click', () =>{
    const show = document.getElementById('senha');
    const actual = show.getAttribute("type");
    if(actual === "password"){
        document.querySelector('.show-password').innerHTML = 'OCULTAR';
        show.setAttribute("type", "text")
    }
    else{
        document.querySelector('.show-password').innerHTML = 'MOSTRAR';
        show.setAttribute("type", "password")
    }
})


