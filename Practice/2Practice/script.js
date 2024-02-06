let boxes = document.querySelectorAll(".box");
console.log(boxes);

// boxes[0].innerText="New unique value 1";
// boxes[1].innerText="New unique value 2";
// boxes[2].innerText="New unique value 3";

for(let i=0;i<boxes.length;i++){
    boxes[i].innerText = `new unique value ${i+1}`;
}