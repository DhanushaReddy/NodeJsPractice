const fileRead=require("fs")

fileRead.readFile("./CallApi.txt","utf-8",(error,data)=>{
    if(error) console.log(error);
    console.log(data);
})