// document.querySelectorAll('.drum')[0].addEventListener('click', function(){
//     alert('Saya Klik');
// });
// document.querySelectorAll('.drum')[1].addEventListener('click', function(){
//     alert('Saya Klik');
// });
// document.querySelectorAll('.drum')[2].addEventListener('click', function(){
//     alert('Saya Klik');
// });
// document.querySelectorAll('.drum')[3].addEventListener('click', function(){
//     alert('Saya Klik');
// });
// document.querySelectorAll('.drum')[4].addEventListener('click', function(){
//     alert('Saya Klik');
// });
// document.querySelectorAll('.drum')[5].addEventListener('click', function(){
//     alert('Saya Klik');
// });
// document.querySelectorAll('.drum')[6].addEventListener('click', function(){
//     alert('Saya Klik');
// });

// document.querySelectorAll('.drum')[7].addEventListener('click', function(){
//     alert('Saya Klik');
// });


for (var i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
       var inerhtmla = this.innerHTML;
        makeSong(inerhtmla);
        animationButton(inerhtmla);
        // alert('Saya Klik');
});
}

document.addEventListener("keydown", function(ee)  {
    makeSong(ee.key);
    animationButton(ee.key);
})

function makeSong (key){
    switch (key) {
        case 'w':
            var song1= new Audio('./sounds/tom-1.mp3');
            song1.play();
        break;
        case 'a':
            var song2= new Audio('./sounds/tom-2.mp3');
            song2.play();
        break;
        case 's':
            var song3= new Audio('./sounds/tom-3.mp3');
            song3.play();
        break;
        case 'd':
            var song4= new Audio('./sounds/tom-4.mp3');
            song4.play();
        break;
        case 'j':
            var song5= new Audio('./sounds/snare.mp3');
            song5.play();
        break;
        case 'k':
            var song6= new Audio('./sounds/crash.mp3');
            song6.play();
        break;
        case 'l':
            var song7= new Audio('./sounds/kick-bass.mp3');
            song7.play();
        break;

        default: 
       }
}

function animationButton(curendKey){
    var activeButton = document.querySelector('.'+curendKey).classList.add('pressed');
    console.log(activeButton);
    setTimeout(function(){
        document.querySelector('.'+curendKey).classList.remove('pressed');
    },100);
}
// const input = document.querySelector("input");
// const log = document.getElementById("log");

// input.addEventListener("keydown", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

