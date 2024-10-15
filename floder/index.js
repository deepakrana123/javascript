let abc = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  g: (a, b, c) => a * b * c,
  e: 1,
  f: true,
};

const pipe = (abc) => {
  return function (...args) {
    for (let key in abc) {
      let val = abc[key];
      if (typeof val == "function") {
        abc[key] = val(...args);
      } else {
        abc[key] = pipe(val)(...args);
      }
    }
    return abc;
  };
};

// console.log(pipe(abc)(1, 2, 3));
let abcd = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function flatten(obj, prefix) {
  let output = {};
  for (const key in obj) {
    const val = obj[key];
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof val == "object") {
      if (Array.isArray(val)) {
        const { ...arrToObj } = val;
        const newObj = flatten(arrToObj, newKey);
        output = { ...output, ...newObj };
      } else {
        const newObj = flatten(val, newKey);
        output = { ...output, ...newObj };
      }
    } else {
      output = { ...output, [newKey]: val };
    }
  }
  return output
}

// console.log(flatten(abcd))
function diffTwoDates(date1,date2){
    const twoMilliseconds=24*60*60*1000
    const newDate1=new Date(date1)
    const newDate3=new Date(date2)
    return (newDate3-newDate1)/twoMilliseconds
}
// console.log(diffTwoDates('10/15/2020', '12/1/2020'))
const formatTime = (time) => {
    let abc=time.toLowerCase()
    let [hours,minutes]=abc.split(':')
    if(minutes.endsWith('am')){
        hours = hours == 12 ? "0" : hours;
    }
    else{
        if(hours>12){
            hours=hours-12
        }
        hours = hours == 12 ? hours:String(+hours + 12);
    }
    return `${hours.padStart(2,0)}:${minutes.slice(0,2).padStart(2,0)}`
}
console.log(formatTime("12:10AM"))
console.log(formatTime("12:33PM"))
console.log(formatTime("5:33PM"))
console.log(formatTime("15:33PM"))