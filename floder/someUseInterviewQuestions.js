
const URLs= [
  "www.google.com",
  "www.learnersbucket.com",
  "xyz.www.google.com",
  "abc.xyz.www.google.com",
  "google.com",
  "learnersbucket.com",
  "practice.learnersbucket.com",
  "abc.news.learnersbucket.com",
  "abc.xyz.www.google.com",
  "www.learnersbucket.com",
  "google.com",
];

const aggerate=URLs.reduce((acc,currStr,index,arr)=>{
    let count=0
//     currStr.split('.').forEach((url) => {
//     if (acc.hasOwnProperty(url)) {
//         acc[url] = acc[url] + 1;
//     } else {
//         acc[url] = 1;
//     }
// });
    arr.forEach((url)=>)
    // acc[currStr]=count
    return acc
},{})
console.log(aggerate)