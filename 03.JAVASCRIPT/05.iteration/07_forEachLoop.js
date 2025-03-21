const coding = ['js', 'python', 'java', 'c++', 'ruby'];

coding.forEach( function(item){
    // console.log(item);
} )

coding.forEach( (val) => {
    // console.log(val);
})

function printMe(val){
    // console.log(val); 
}
coding.forEach(printMe);

coding.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
})


const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'JS',
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp',
    },
    {
        languageName: 'Python',
        languageFileName: 'py',
    },
    {
        languageName: 'Ruby',
        languageFileName: 'rb',
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    console.log(item.languageFileName);
    
})