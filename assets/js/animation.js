// Infinite Animation Loop Visitors Review
const marquee = document.querySelector(".reviews-marquee");
const track = document.querySelector(".reviews-track");

// Clone card
[...track.children].forEach(card=>{
    track.appendChild(card.cloneNode(true));
});

const originalWidth = track.scrollWidth / 2;

let position = 0;

let currentSpeed = 0.6;
let targetSpeed = 0.6;

marquee.addEventListener("mouseenter",()=>{

    targetSpeed = 0;

});

marquee.addEventListener("mouseleave",()=>{

    targetSpeed = 0.6;

});

function animate(){

    currentSpeed += (targetSpeed-currentSpeed)*0.08;

    position -= currentSpeed;

    if(Math.abs(position)>=originalWidth){

        position = 0;

    }

    track.style.transform =
    `translateX(${position}px)`;

    requestAnimationFrame(animate);

}

animate();
