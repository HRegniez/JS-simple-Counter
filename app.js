let count = document.getElementById('count'),
    less = document.getElementById('min'),
    reset = document.getElementById('rst'),
    plus = document.getElementById('plus'),
    counter = 0;

less.addEventListener('click' , function(){
    counter --;
    count.innerHTML = counter;
})
reset.addEventListener('click' , function(){
    counter = 0;
    count.innerHTML = counter;
})
plus.addEventListener('click' , function(){
    counter ++;
    count.innerHTML = counter;
})