const user={
    username:"devendra",
    name:"rana",
    getUserDetails:function(){
        console.log("username","user")
    }
}
console.log(user.username)
console.log(user.getUserDetails())
// what is object literal , collection of method and properties;



function User(username,firstname,lastname){
    this.username=username;
    this.firstname=firstname;
    this.lastname=lastname;
    return this
}


const l1=User("dev@123","Devendra","Rana");
const l2=User("dev123@123","Devendra Rana","Rana Ji")
// console.log(l2,"l2")

function multiplyby4(value){
    return value*4
}

const a=multiplyby4(5);
console.log(multiplyby4.power=2)
console.log(multiplyby4.prototype)
console.log(a)
