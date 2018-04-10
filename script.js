let mainSection = document.querySelector(".main");
let rectangle = document.querySelector(".rectangle");

mainSection.addEventListener("mousemove", runEvent);

function runEvent(e){
    console.log("EventType:"+e.type);

    mainSection.style.backgroundImage = "linear-gradient(19deg, rgb("+e.offsetX+", 212, 168) 0%, rgb("+e.offsetY+", 33, 255) 100%)";

    rectangle.style.transform = "rotate("+e.offsetY+"deg)";

}