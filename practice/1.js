let name = "something where";
name=20
console.log(name)
{
    var sum = 120;
}
console.log(sum);
const heythere = "imhere";
console.log(heythere.length);

function add(a,b){
    return a+b;
}
console.log(add(10,20))

const add1 = (a,b) => a+b;
console.log(add1(20,30))

// function Person(){
//     this.age = 0;
//     setInterval(()=>{
//         console.log(`Irfan Ansari`)
//     },1000)
// }
// new Person();
const ar1 = [1,2,3];
const [a1,...c1] = ar1;
console.log(a1,c1)

function printStudent({name,age}){
    console.log(`my name is ${name} and umr is ${age}`)
}
const student = {
    name:"irfab",
    age:22,
    salary:"bhikh mangana"
}
printStudent(student)