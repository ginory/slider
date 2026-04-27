let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let ListDom = carouselDom.querySelector('.list');

let thumbnailBorderDom = document.querySelector('.thumbnail');

let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.thumbnail__item');

let timeDom = document.querySelector('.time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000; //3с
let timeAutoNext = 7000; 

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type) {
   let SliderItemDom = ListDom.querySelectorAll('.list__slide');
   let thumbnailItemsDom = document.querySelectorAll('.thumbnail__item');

   if (type === 'next') {
    ListDom.appendChild(SliderItemDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
     } else {
     ListDom.prepend(SliderItemDom[SliderItemDom.length - 1]);
     thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
     carouselDom.classList.add('prev'); 
   }

   clearTimeout(runTimeOut);
   runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
   }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}