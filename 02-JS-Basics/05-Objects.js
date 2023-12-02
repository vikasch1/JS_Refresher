console.log('---object destructuring----')

const course ={
  courseName:"js refresher",
  price:"999",
  courseInstructor:"vikas",
}

const {courseInstructor:instructor}=course
console.log(instructor)

const navbar=({company})=>{


}
navbar(company="vikas")

// {
//   "name":"vikas",
//   "courseName":"js refresher",
//   "price":"9999"

// }

// [
//   {},
//   {},
//   {},
// ]


