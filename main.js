function changeTextBtn1(event) {
    console.log(event)
    document.getElementById("change-section").innerHTML = "You clicked First button";
}
const button1 = document.querySelector('.btn1');
button1.addEventListener('click', changeTextBtn1);

function changeTextBtn2(event) {
    console.log(event)
    document.getElementById("change-section").innerHTML = "You clicked Second button";
}
const button2 = document.querySelector('.btn2');
button2.addEventListener('click', changeTextBtn2);

function changeTextBtn3(event) {
    console.log(event)
    document.getElementById("change-section").innerHTML = "You clicked Third button";
}
const button3 = document.querySelector('.btn3');
button3.addEventListener('click', changeTextBtn3);

// "Use event delegation principle" - work still in progress...