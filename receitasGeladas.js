let next = document.querySelector('.next2');
let prev = document.querySelector('.prev2');

next.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item2')
    document.querySelector('.slide2').appendChild(items[0])
})

prev.addEventListener('click' , function(){
    let items = document.querySelectorAll('.item2')
    document.querySelector('.slide2').prepend(items[items.length - 1])
})