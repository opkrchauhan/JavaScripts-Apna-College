let btn1 = document.querySelector("#btn1");
 
// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
//      console.log("btn1 was clicked");
//      let a = 25;
//      a++;
//      console.log(a); //26
// };

 
btn1.addEventListener("click", (evt)=>{
    console.log("btn1 was clicked -- Handler 1");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
})

btn1.addEventListener("click", (evt)=>{
    console.log("btn1 was clicked---Handler 2");
})

const handler3 = ()=>{
    console.log("btn1 was clicked---Handler 3");
};

btn1.addEventListener("click", (evt)=>{
    console.log("btn1 was clicked---Handler 4");
})

btn1.removeEventListener("click",handler3);


// let div = document.querySelector("div");

// div.onmouseover = ()=>{
//     console.log("you are inside div class");
// };