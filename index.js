var heci = document.querySelector('.square')
var start = document.querySelector('.start')
var stop = document.querySelector('.stop')

var c = 0
start.addEventListener('click', function(){
    var running = true
    setInterval(function(){
        if (running) {
            heci.textContent = c++
            stop.addEventListener('click', function(){
                running = false
            })
        }
        
    })
})





var number = document.querySelector('.animate__backInDown')
var input = document.querySelector('.input')
var animate = document.querySelector('#animate')

animate.addEventListener("click", function(m){
    m.preventDefault();
    document.documentElement.style.setProperty('--animate-duration', '15s');
    number.textContent = input.value
})



var btn = document.querySelector('.btn')
var img = document.querySelector('.img')

btn.addEventListener('click', function(){
    img.style.transform = 'scale(2)'
    img.style.transition = '0.5s';
    setTimeout (function(){
    img.style.transform = 'scale(1)'
        
    },400)

})
