let firstPtag = document.querySelector(`p`);
firstPtag.innerText = "hello world";

let allPtags = document.querySelectorAll("p");
for (let i=0; i<allPtags.length; i++){
    allPtags[i].innerText = `I am number: ${i+1}`
}