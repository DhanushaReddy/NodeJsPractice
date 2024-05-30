//synch api"
const fs=require("fs")

let fileRead=fs.readFileSync("Sync.txt")

console.log(fileRead);//logs buffer

//to make is understandable use UTF-8

console.log(fileRead.toString("utf-8"));


//for error
// const fs2=require("fs")
// let content=fs.readFileSync("./Fs1.txt")
// console.log(content.toString("utf-8"));
