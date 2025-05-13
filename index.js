//counter program
const decreaseBTn=document.getElementById("decreaseBtn");
const resetBTn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countlabel=document.getElementById("countLabel");
let count=0;
increaseBtn.onclick =function(){
count++;
countlabel.textContent = count;
}
// Decrease Button
decreaseBTn.onclick = function() {
    count--;
    countlabel.textContent = count;
}

// Reset Button
resetBTn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}