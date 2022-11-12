// // Getting image resized and added a border
// let duckImg = document.getElementById(`ducks`);
// duckImg.style.height = `100px`;
// duckImg.style.border = `thick solid black`

// duckImg = document.getElementById(`ducks1`);
// duckImg.style.height = `100px`;
// duckImg.style.border = `thick solid black`



// //selecting items by class
// let allLitags = document.querySelectorAll("li");
// for (let i=0; i<allLitags.length; i++){
//     allLitags[i].innerText = `#${i+1}` 
// }

// let firstPara = document.getElementById(`firstPara`);
// firstPara.style.fontSize = `2em`;
// firstPara[`style`][`fontStyle`] = `italic`;

// let evenPara = document.getElementsByClassName(`even`);
//     for(let i=0; i<evenPara.length;i++){
//         evenPara[i].innerHTML += "i am an even para";
//     }

//     let galleryALL = document.querySelectorAll('#gallery');
//     let galleryQuery = document.querySelector(`#gallery`);

let images = document.querySelectorAll('ducks')
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute(`src`,`https://i.redd.it/4d989bm8au711.png`); 
}

letAllPtags = documnet.querySelectorAll(`p`);
// when using for of make sure to replace integrator
for (const paragraph of allPtags) {
    console.log(paragraph);
    if (paragraph.innterText.includes(`link`))
        paragraph.insertAdjacentHTML(`beforeend`, `<a href='https://bing.com' target='_blank'>
        </a>`)
    
}

