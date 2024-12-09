const course = {
    courseName: "Chai aur JavaScript",
    coursePrice: 999,
    courseInstructor: "Hitesh"
}
// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// {
//     "name": "Hitesh",
//     "course": "JavaScript",
//     "price": "free"
// }


[
    {},
    {},
    {},
]