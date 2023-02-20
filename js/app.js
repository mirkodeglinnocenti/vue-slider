// console.log('Test')


// Vue
const { createApp } = Vue

createApp({
data() {
    return {
    message: 'Hello Vue!'
    }
}
}).mount('#app')

















// Prendere le slide da html
const slideBoxElements = document.getElementById('slides');
// console.log(slideBoxElements);

// Prendere freccia a sinistra
const leftArrowElement = document.querySelector('.carousel__arrow.arrow-left');
// Prendere freccia a destra
const rightArrowElement = document.querySelector('.carousel__arrow.arrow-right');

// Creo la variabile indice che determina a quale slide siamo
let indiceSlideAttiva = 0;


// array di oggetti 
const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//////////// Ciclo for classico

// for (let i = 0; i < images.length; i++) {

//     let slideCorrente = images[i];

//     const { image, title, text} = slideCorrente;

//     // console.log('title:', title)
//     // console.log('text:', text)
//     // console.log('image:', image)

//     let slide = `
//     <div class="slide">
//         <img class="position-relative" src="${image}" alt="foto di">
//         <div class="description-box">
//             <h3>${title}</h3>
//             <p>${text}</p>
//         </div>
//     </div>
//     `;

//     slideBoxElements.innerHTML += slide;

// }

/////////// forEach

images.forEach((el, i, images) => {
    
    const { image, title, text} = el;

    let slide = `
    <div class="slide">
        <img class="position-relative" src="${image}" alt="foto di">
        <div class="description-box">
            <h3>${title}</h3>
            <p>${text}</p>
        </div>
    </div>
    `;

    slideBoxElements.innerHTML += slide;

})


const primaSlide = document.querySelector('.slide');
// console.log(primaSlide)
primaSlide.classList.add('active');


const slideElements = document.querySelectorAll('.slide');

console.log(slideElements);


// Tasto destra -> avanti

rightArrowElement.addEventListener('click', rightSlide);


// // Tasto sinistra -> indietro

leftArrowElement.addEventListener('click', leftSlide);


// autoplay
let autoplay = setInterval(rightSlide, 3000);

// Interrompere autoplay quando il mouse entra dentro le slide
slideBoxElements.addEventListener('mouseenter' , () => {
    console.log('mouse entrato');

    clearInterval(autoplay);
    autoplay = undefined;

})

// Ripremdere autoplay quando il mouse esce dalle slide
slideBoxElements.addEventListener('mouseleave' , () => {
    console.log('mouse uscito');

    autoplay = setInterval(rightSlide, 3000);

})





// Funzioni


// Slide successiva

function rightSlide() {

    if (indiceSlideAttiva <  images.length - 1){
    
        let slideCorrente = slideElements[indiceSlideAttiva];
        console.log(slideCorrente);
        // togliendo la classe active
        slideCorrente.classList.remove('active');

        indiceSlideAttiva++;

        let prossimaSlide = slideElements[indiceSlideAttiva];
        // aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');

    } else if (indiceSlideAttiva =  images.length - 1) {

        let slideCorrente = slideElements[indiceSlideAttiva];
        console.log(slideCorrente);
        // togliendo la classe active
        slideCorrente.classList.remove('active');

        indiceSlideAttiva = 0;

        let prossimaSlide = slideElements[indiceSlideAttiva];
        // aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');
    }

    console.log('current slide', indiceSlideAttiva);


}



// Slide precedente


function leftSlide() {

	console.log('current slide', indiceSlideAttiva);

    if (indiceSlideAttiva > 0){
    
    
        let slideCorrente = slideElements[indiceSlideAttiva];
        // togliendo la classe active
        slideCorrente.classList.remove('active');

        indiceSlideAttiva--;

        let prossimaSlide = slideElements[indiceSlideAttiva];
        // aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');

    } else if (indiceSlideAttiva === 0){
    
    
        let slideCorrente = slideElements[indiceSlideAttiva];
        // togliendo la classe active
        slideCorrente.classList.remove('active');

        indiceSlideAttiva = images.length - 1;

        let prossimaSlide = slideElements[indiceSlideAttiva];
        // aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');

    }

    console.log('current slide', indiceSlideAttiva);


}