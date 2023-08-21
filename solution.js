console.log("hiii")

let a="how are you";

let b=a.replaceAll(/[aeiou]/gi,"")
console.log(a,b)


let c="how will we can do what you have not done yet"
let d=c.replace(/[aeiou]/gi,"")
console.log(d.length,d.split(" ").reverse().join(" ").length,c.length)