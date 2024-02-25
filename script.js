var items = document.querySelectorAll(".item");


document.addEventListener('keydown', function(event) {
    items.forEach(function(e){
        if(event.key == e.id){
            e.childNodes[5].currentTime = 0;
            e.childNodes[5].play();
            e.classList.add("play");
        }
    })
})


document.addEventListener('keyup', function(event) {
    items.forEach(function(e){
        if(event.key == e.id){
            e.classList.remove("play");
        }
    })
})


items.forEach(function(e){
    e.addEventListener('touchstart', function(){
        e.childNodes[5].currentTime = 0;
        e.childNodes[5].play();
        e.classList.add("play");
    })
})


items.forEach(function(e){
    e.addEventListener('touchend', function(){
        e.classList.remove("play");
    })
})