const apiBody = document.querySelector(".api_body");

// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
const apiUrl = "https://icanhazdadjoke.com/";

const fetchData = () => {
    fetch(apiUrl, {
        headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
    })
      .then((data) => {
        console.log(data.joke);
        apiBody.innerHTML = data.joke;
    })
      .catch((error) => {
        apiBody.innerHTML = `Api is not working`;
        console.log("I am sorry");
    });
};

fetchData();

// Add event listener to fetch a new joke when the button is clicked
document.getElementById("fetchJoke").addEventListener("click", fetchData);