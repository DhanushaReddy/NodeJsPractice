// const {EventEmitter}=require("events")

// class MyEmitter extends EventEmitter{}
//creating own event emitter


// console.log(EventEmitter);//event emitter is a function

// let raceDriver=new MyEmitter()
//creating obj for MyEmitter

//observer-1
// raceDriver.on("race",()=>{
//     console.log(" i could have done it better");
// })
//this event race doent emit because when the raceDriver object being called upon 
//.on() event it has race only  

// observer-2
// raceDriver.on("race win",()=>{
//     console.log("lets partys");
// })

// observer-3
// raceDriver.on("race win",()=>{
//     console.log(" hes safe");
// }),



//Passing second argument

// const {EventEmitter}=require("events")
// class MyEmitter extends EventEmitter{}

// let raceDriver=new MyEmitter()

// //observer-1
// raceDriver.on("race",(status)=>{
//     if(status=="win"){
//     console.log(" i could have done it better");
//     }
//     else{
//         console.log("thats what hes built for");
//     }
// })

// //observer-2
// raceDriver.on("race",(status)=>{
//     if(status=="win")
//     {
//         console.log("lets partys");
//     }
//     else{
//         console.log("lets party next year");
//     }
   
// })

// //observer-3
// raceDriver.on("race",(status)=>{
//     if(status=="win")
//     {
//         console.log(" hes safe");
//     }
//     else{
//         console.log(" hes safe for now");
//     }
    
// })


// raceDriver.emit("race","win")
// i could have done it better
// lets partys
// hes safe


// raceDriver.emit("race","lost")
// thats what hes built for
// lets party next year
//  hes safe for now
