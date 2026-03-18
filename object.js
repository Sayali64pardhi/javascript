const object = {
    name: "sayali",
    age: 20,
    city: "nagpur",

}
object.age = 26;
console.log(object.name);
console.log(object.age);
console.log(object["city"]);

// const obj = {
//     name: "shreya",
//     age: 20,
//     city: "nagpur",

// }
// object.age=26;
// console.log(object.name);
// console.log(object.age);
// console.log(object["city"]);


const obj = {
    name: "rohan",
    age: 20,
}
console.log(obj);


// const data ={
//     device_id: "abcd/1564",
//     temperature: 25,
//     location:{
//         lat:"12,52,2",
//         lon:"77,23,4"

//     }

// };
// console.log(data.device_id);
// console.log(data["temperature"]);
// console.log(data.location);


const data = {
    name: "ram",
    fun: ()=>{
        console.log("Hello");
    },
};
console.log(data["name"]);
data.fun();

// object aggrication  ..... from forntend to backend reqst of data jsn

const {name,fun}=data;
fun();
console.log(name);


