let textEl=document.querySelector("#text-area")
let spanEl=document.querySelector("#char-count")

textEl.addEventListener("keyup",function(){


let CountEle=textEl.value.length

spanEl.innerHTML=CountEle;


})