const studentBioData = {
    firstName: "Shubham",
    lastName: "Raj",
    age: 23,
    gender: "male",
    grade: "A",
    course: ["Math","Science","English"],
    address: {
        street: "C-434, Alpha",
        city: "Greater Noida",
        state: "UP",
        zipcode: "201310"
    },
};

const addTodoList = () => {
    // localStorage.setItem("objectData", studentBioData);
    localStorage.setItem("objectData", JSON.stringify(studentBioData));

}
const getTodoList = () => {
    // const getStudentData = localStorage.getItem("objectData");
    // console.log("Retrieved from Lacal Storage: ", getStudentData);
    const getStudentData = JSON.parse(localStorage.getItem("objectData"));
    console.log("Retrieved from Lacal Storage: ", getStudentData);
    
}
const removeTodoList = () => {
    localStorage.removeItem("objectData");

    const removedData = localStorage.getItem("objectData");
    console.log("Data after removed: ", removedData);
    
}


document.getElementById("addBtn").addEventListener("click", () => {
    addTodoList();
});
document.getElementById("getBtn").addEventListener("click", () => {
    getTodoList();
});
document.getElementById("removeBtn").addEventListener("click", () => {
    removeTodoList();
});