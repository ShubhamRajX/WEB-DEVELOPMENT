const currentTime = () => {
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = curTime;
};
currentTime();

const intervalId = setInterval(() => {
    currentTime();
}, 1000);
setTimeout( () => clearInterval(intervalId), 5000);