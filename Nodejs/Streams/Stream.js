// const fs=require("fs")


// let readStreamObj=fs.createReadStream("./readStream.txt",{
//     encoding:"utf-8",
//     highWaterMark:2
// })

// readStreamObj.on("data",(chunks)=>{
//     console.log(chunks);
// })


// const fs=require("fs")
// let readStream1=fs.createReadStream("./readStream.txt")

// readStream1.on("open",()=>{
//     console.log("stream opened");
// })

// readStream1.on("data",(chunks)=>{
//     console.log("chunk starts");
//     console.log(chunks);
//     console.log("chunk ends");
// })

// readStream1.on("close",()=>{
//     console.log("stream closed");
// })


// const fs=require("fs")
// let readStream1=fs.createReadStream("./readStream.txt","utf-8")
// let writeStream=fs.createWriteStream("./some.txt")

// readStream1.on("data",(chunks)=>{
//     writeStream.write(chunks,(err)=>{
//         if(err)
//         console.log(err);
//     })
// })

//duplex
// const fs=require("fs")
// let readStream1=fs.createReadStream("./readStream.txt","utf-8")
// let writeStream=fs.createWriteStream("./some.txt")

// readStream1.pipe(writeStream)


//transform

const fs=require("fs")
const zlib=require("zlib")

let gzip=zlib.createGzip()

let readStream1=fs.createReadStream("./readStream.txt","utf-8")
let writeStream=fs.createWriteStream("./some.gz")


readStream1.pipe(gzip).pipe(writeStream)