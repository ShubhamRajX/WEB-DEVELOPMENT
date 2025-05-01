
// const countDownElement = document.getElementById("countDown");
const countDownElement = document.querySelector("#countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;

//Function to start the timer
const startTimer = () => {
    intervalId = setInterval( () => {
    countDownElement.innerHTML = startCount++;
}, 1000);
};

//Function to stop the timer
const stopTimer = () => {
    showStopValue();
    clearInterval(intervalId);
};

//Function to reset the timer
const resetTimer = () => {
    startCount = 0;
    countDownElement.innerHTML = startCount;
    clearInterval(intervalId);
};

//Function to show the timer
const showStopValue = () => {
    const newPara = document.createElement("p");
    newPara.innerText = `The stop time is: ${startCount - 1}`;
    resetValueElement.append(newPara);
};

//Function to clear the timer
const clearTimeValue = () => {
    resetValueElement.innerHTML = "";
};

// Event Listener
document
.querySelector(".start_btn")
.addEventListener("click", startTimer);

document
.querySelector(".reset_btn")
.addEventListener("click", resetTimer);

document
.querySelector(".stop_btn")
.addEventListener("click", stopTimer);

document
.querySelector(".time_btn")
.addEventListener("click", showStopValue);

document
.querySelector(".clear_btn")
.addEventListener("click", clearTimeValue);

