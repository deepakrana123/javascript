function closuer(){
    let a=10;
    function closuer1(){
        console.log(a)
        return a
    }
    closuer1()
}
console.log(closuer())

function User(username,firstname,lastname,score){
    this.username=username;
    this.firstname=firstname;
    this.lastname=lastname;
    this.score=score
    return this
}


const l1=new User("dev@123","Devendra","Rana",11);
const l2=new User("dev123@123","Devendra Rana","Rana Ji",22)


User.prototype.incremeant=function(){
    return this.score++
}

User.prototype.printMe = function(){
    console.log(`${this.score}${this.username}
    ${this.firstname}
    ${this.lastname}`)
}
console.log(l1.printMe)
console.log(l2.printMe)