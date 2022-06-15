// const fruits = ["Banana", "Mango", "Sugarcane", "StrawBerry"];

// fruits.forEach((value, index, array)=>{
//     console.log(index +" "+ value +" comes on Array of "+ array);
// });

// const colors = ["Red", "Green", "Blue"];

// const mappedData = colors.map((color)=>{
//   console.log(color);
//    return `<li> ${color} </li>`
// });

// console.log(mappedData);

// const employee = [
//   {
//     Name: "Abc",
//     post: "Developer",
//   },
//   {
//     Name: "Def",
//     post: "Tester",
//   },
// ];
// const mappedData = employee.map((value, index, array) => {

//     return "Doing work as "+ value.post;
// });

// console.log(mappedData);

// const ages = [20, 15, 18, 25];
// const isMore = ages.filter((value, index, array)=>{
//     // if (value>19){
//     //     return true;
//     // } else{
//     //     return false;
//     // }

//     return value > 19 ? true:false;
// });

// console.log(isMore);

// const marks = [14, 20, 25];

// const sum = marks.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(sum);

const employee = [
  {
    Name: "Abc",
    post: "Developer",
    age: 20,
    salary: 15000,
  },
  {
    Name: "Def",
    post: "Tester",
    age: 23,
    salary: 25000,
  },
  {
    Name: "ghi",
    post: "Front-end",
    age: 30,
    salary: 35000,
  },
];
const extractData = employee.reduce((prev, curr) => {
  return  {salary: prev.salary + curr.salary};
});


console.log(extractData);





