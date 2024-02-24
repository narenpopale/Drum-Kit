var items = document.querySelectorAll(".item");


document.addEventListener('keydown', function(event) {
    items.forEach(function(e){
        if(event.key == e.id){
            e.childNodes[5].currentTime = 0;
            e.childNodes[5].play();
            e.style.border = "5px solid yellow";
            e.style.backgroundColor = "blue";
            e.style.transform = "scale(1.1)";
            e.style.transition = "background-color 0.07s ease";
            e.style.transition = "border 0.07s ease";
            e.style.boxShadow = "0px 0px 20px 20px rgba(0, 0, 0, 0.5)";
        }
    })
})


document.addEventListener('keyup', function(event) {
    items.forEach(function(e){
        if(event.key == e.id){
            e.style.transform = "scale(1.0)";
            e.style.border = "5px solid black";
            e.style.backgroundColor = "unset";
            e.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
        }
    })
})