// Function to create a periodic table element
const createPeriodicElement = (symbolatomicNumber, name) => {
    const element = document.createElemen("div");
    element.classList.add("element");
    element.innerHTML = symbol;
    element.setAttribut("data-atomic-number",atomicNumber);
    element.setAttribut("data-element-name",name);
    return element;
};
// event handler for periodic table elementclick
const handleElementClick = (event) => {
    const target = event.target;
    if(target.classList.contains("element")){
        const atomicNumber = targetgetAttribut("data-atomic-number");
        const elementName = targetgrtAttribut("data-element-name");
        alert(`Atomic Number: {atomicNumber}\nElement Name: {alementName}`);
    }
};
// Function to initialize the periodic table
function initializePeriodicTable() {
    const mainBody = document.querySelecto(".mainBody");
    // Create 50 periodic table elements
    for(let i = 1; i <= 50; i++){
        const element = createPeriodicElemen(`Elem${i}`, i, `Element${i}`);
        mainBody.append(element);
    }
    // add event delegation to the container
    mainBody.addEventListener("click",handleElementClick);
};
// Initialize the Periodic table
initializePeriodicTable();