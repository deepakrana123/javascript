console.log("hii")

// event bubbling bottom to top approach , focus and alert doesnot bubble

const div=document.querySelector('div')
const button=document.querySelector('button')
const form=document.querySelector('form')
const h1=document.querySelector('h1');
const h2=document.querySelector('h2')

// div.addEventListener('click',func1)

// button.addEventListener('click',func1)

// form.addEventListener('click',func1)

// function func1(event){
//     console.log(event,"evet",event.target.tagName,event.currentTarget.tagName)
//     alert("event name" ,event.target.tagName)
// }

var pressedcount=0
var count=0

const debounceCount=_.debounce(()=>{
    h2.innerHTML=++count
},800)
button.addEventListener('click',()=>{
    h1.innerHTML=++pressedcount;
    debounceCount()
})


const myDebounce=(cd,d)=>{
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
             cd(...args)
        },d)
    }
}

const myTrottle=(cd,d)=>{
   let last=0;
   return function(...args){
    let now = new Date().getTime();
    if(now-last<0)return ;
    last=now
    return cd(...args)
   }
} 