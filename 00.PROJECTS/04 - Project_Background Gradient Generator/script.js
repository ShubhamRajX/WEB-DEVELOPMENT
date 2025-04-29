let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#000000";
let rgb2 = "#ffffff";

const hexaValues = () => {
    let myHexaValues = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i<6; i++){
        colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
    }
    return colors;

}

const handleButton1 = () => {
    rgb1 = hexaValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.style.backgroundColor = `linear-gradeient(to right, ${rgb2})`;
};
const handleButton2 = () => {
    rgb2 = hexaValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("Code is copied! ");
});