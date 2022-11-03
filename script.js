var elementCount = 0;
function startTimer(){
    var element = document.querySelectorAll(".blk");    
    for (let i = 0; i < element.length; i++) {
        elementCount=element.length;
        element[i].addEventListener("click", function handleClickEvent() {
            element[i].classList.add("dNone");
            elementCount=elementCount-1;
           if(elementCount == 0){
            alert("You Won the Game ");
            clearInterval(interval);
            count=0;
            document.getElementById("timer").innerHTML=count + " sec";
           }
        })  
    }
    interval=setInterval(counter,300);
}
function restart(){
    location.reload();
}

var count=120;
function counter(){
    count--;
    document.getElementById("timer").innerHTML=count + " sec";
    if(count == 0){
        alert("Game over !!! Better luck next time")
        clearInterval(interval);
        count=0;
        location.reload();
    }
}



