let firstPtag = document.querySelector(`p`);
firstPtag.innerText = "hello world";
let str1 = "hello";
let str2 = "Folks";
let str3 = str1 +str2;
let allPtags = document.querySelectorAll("p");
for (let i=0; i<allPtags.length; i++){
    allPtags[i].innerText = `I am number: ${i+1}` //+1 to make the index start at one instead of 0
}

let bestTag = document.getElementById(`bestTag`)

bestTag.innerText = "I am the best";

let specialTags = document.getElementsByClassName(specialtag)
for (let i=0; i<specialTags.length; i++){
    specialTags[i].innerText +- "I am also very special";

}

let head = document.getElementById(`head`)
head.innerHTML = "link Removed";