const object1={
    name:"RoadSide",
    age:24,
    "like this video":"no"
}

console.log(object1.name , object1.age , object1["like this video"])
console.log(object1["name"] , object1["age"])

delete object1.name

console.log(object1.name)



const func=(function (a){
    delete a
    return a
} )(2)
console.log(func)

const ab="Devendra"
const ba="Rana"


const obj={
    ab:ba,
    [ab]:ba
}
console.log(obj,"obj")


// delete only works for object not for variable , or property of a object


for (key in obj){
    console.log(obj[key])

}

let nums={
    a:1000,
    b:2000,
    "value used":"how can i used"
}
for(key in nums){
    if(typeof(nums[key])==='number'){
        nums[key]=nums[key]*2
    }
}
console.log(nums,"nums")


let a={};
let ab1={b:'20',
c:'40'};
let ab2={c:'30'};
a[ab1]=124;
a[ab2]=345
console.log(a[ab1])
console.log(a.ab1)
console.log(a[ab2])
console.log(a)


let n="strin123"
console.log(JSON.stringify(nums))
// console.log(JSON.parse(n))

const user={name:"Devendra",lastname:"Rana"}
const full={firstname:"why",...user}
console.log(full)


const shape={
    radius:10,
    area(){
        return this.radius*this.radius
    },
    parameter:()=>{
        return this.radius+this.radius
    }
}

console.log(shape.area(),shape.parameter())

let b="rahul"
const {b:myname}=ab1
console.log(myname)

const users = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Masters'
    }
  };
  
const {id , name , age,education:{degree:newdegree}}=users
console.log(id , name , age,newdegree)


const f=[1,1,2,1,3,3,4,4,5,1];
const e=[1,1,[2,1,3,1,4],[5,5,6,6,[7,8,9]]];
d=e.flat(2)
const obj1={}

for(let i=0;i<d.length;i++){
    if(obj1[d[i]]){
        obj1[d[i]]=obj1[d[i]]+1
    }
    else{
        obj1[d[i]]=1
    }
}

console.log(obj1,"obj1")


function flat(a,n){
    let s=[]
    a.forEach(element => {
        if(typeof(element)==='object' && n>0){
            s=s.concat(flat(element,n-1))
        }
        else{
            s.push(element)
        }
    });
    return s
}

console.log(flat([1,1,[2,1,3,1,4],[5,5,6,6,[7,8,9]]],2))
function objectToString(obj){
    let result='';
    if(typeof obj==='object'){
        result+='{'
        let first=true;
        
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
              if(!first){
                result +=" "
               }  
               else{
                   result+=key +" :"+ objectToString(obj[key]);
                   first=false
               }
            }
            else if(typeof obj==='string'){
                result+='" '+ obj + '""'
            }
            else{
                result+=obj
            }
        }
    }
    return result
}


console.log(objectToString( {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
  },
}))