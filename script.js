var btn = document.getElementById('btn')
var menu = document.getElementById('menu')

btn.addEventListener("click", function(){
    menu.classList.toggle('show')
})


//////////////////////



const myobserve = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const elements = document.querySelectorAll('.produto')
elements.forEach((element) => myobserve.observe(element))