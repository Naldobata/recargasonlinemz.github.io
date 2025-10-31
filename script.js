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


/////

var btntop = document.getElementById('top')
window.onscroll = function () {
    totop()
}

function totop(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        btntop.style.display = 'flex'
    } else{
        btntop.style.display = 'none'
    }
}

btntop.addEventListener('click', ()=> {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})