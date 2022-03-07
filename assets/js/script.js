const items = document.querySelectorAll('.modal-item');

items.forEach((a) =>{
    a.addEventListener('click', (e) =>{
      e.currentTarget.classList.toggle('active')
    })
})


