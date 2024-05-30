// console.log("log 1");
// process.nextTick(()=>{
//     console.log("this is nextTick queue callback");
// })
// console.log("log 2");



// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 1');
// })




// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// process.nextTick(()=>{
//     console.log('nexttick 2');
// })
// process.nextTick(()=>{
//     console.log('nexttick 3');
//     process.nextTick(()=>{
//         console.log('nested nexttick in nexttick queue');
//     })
// })
// Promise.resolve().then(()=>{
//     console.log('promise 1');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 2');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 3');
//     Promise.resolve().then(()=>{
//         console.log('promise nested in promise queue');
//     })
// })


// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// process.nextTick(()=>{
//     console.log('nexttick 2');
// })
// process.nextTick(()=>{
//     console.log('nexttick 3');
//     process.nextTick(()=>{
//         console.log('nested nexttick in nexttick queue');
//     })
// })
// Promise.resolve().then(()=>{
//     console.log('promise 1');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 2');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 3');
//     process.nextTick(()=>{
//         console.log('nested nexttick in promise queue');
//     })
// })



// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 1');
// })
// setTimeout(()=>{
//     console.log('timer queue');
// },0)



// setTimeout(()=>{
//     console.log('timer queue 1');
// },0)
// setTimeout(()=>{
//     console.log('timer queue 2');
//     process.nextTick(()=>{
//     console.log('nested nexttick callback in timer queue');
// })
// },0)
// setTimeout(()=>{
//     console.log('timer queue 4');
// },0)



// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 1');
// })
// const fs=require("fs")
// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue");
// })
// setTimeout(()=>{
//     console.log('timer queue 1');
// },0)


// const fs=require("fs")
// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue");
// })
// setTimeout(()=>{
//     console.log('timer queue 1');
// },0)


// const fs=require("fs")
// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue");
// })
// setTimeout(()=>{
//     console.log('timer queue 1');
    
// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// },0)



// const fs=require("fs")

// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue");
// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// })
// setTimeout(()=>{
//     console.log('timer queue 1');
//  },0)


// const fs=require("fs")

// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue 1");
// })

// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue 2");
// Promise.resolve().then(()=>{
//     console.log('nested promise 1');
// })
// })

// fs.readFile(__filename,'utf-8',()=>{
// console.log("i/o queue 3");
// })


// process.nextTick(()=>{
//     console.log('nexttick 1');
// })
// Promise.resolve().then(()=>{
//     console.log('promise 1');
// })
// setTimeout(()=>{
//     console.log('timer queue 1');
//  },0)
//  setImmediate(()=>{
//     console.log('check queue 1');
//  })



    //  setImmediate(()=>{
    //     console.log('check queue 1');
    //     process.nextTick(()=>{
    //         console.log('nested nexttick in check queue');
    //     })
    //  })

    //  process.nextTick(()=>{
    //     console.log('nested nexttick in check queue');
    //     setImmediate(()=>{
    //         console.log('check queue 1');})
    // })

//     setImmediate(()=>{
//         console.log('check queue 1');
//         Promise.resolve().then(()=>{
//     console.log('promise 1');
// })
//      })


// const fs=require("fs")

// setImmediate(()=>{
//     console.log('check queue 1');
//     process.nextTick(()=>{
//         console.log('next tick queue 1');
//     })
//     Promise.resolve().then(()=>{
//         console.log('promise queue 1');
//     })
//     })

//     setImmediate(()=>{
//         console.log('check queue 2');
//     })

//     let readStream=fs.createReadStream(__filename)

//     readStream.on("close",()=>{
        
//         console.log('close queue 1');
//         process.nextTick(()=>{
//             console.log('nested next tick queue ');
//         })
//     })

//     readStream.on('close',()=>{
//         console.log('close queue 2');
//     })
//     readStream.close()


// const fs=require("fs");

// fs.readFile(__filename,()=>{
//     console.log('i/o queue 1');
// })

// setImmediate(()=>{
//     console.log('check queue 1');
//     process.nextTick(()=>{
//         console.log('nexted next tick queue 1 ');
//     })
//     })

//     setImmediate(()=>{
//         console.log('check queue 2');
//     })

const fs=require("fs");

fs.readFile(__filename,()=>{
    console.log('i/o queue 1');
})

setImmediate(()=>{
    console.log('check queue 1');
    process.nextTick(()=>{
        console.log('nexted next tick queue 1 ');
    })
    })

    setImmediate(()=>{
        console.log('check queue 2');
    })
        let readStream=fs.createReadStream(__filename)

    readStream.on("close",()=>{
     console.log('close queue 1');
     process.nextTick(()=>{
        console.log('nexted next tick queue 1 ');
    })
})

readStream.close()