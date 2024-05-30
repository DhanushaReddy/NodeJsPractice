//Types of modules
//1) Inbulit modules - HTTP,FS
// 2) Custom module - Our exports
// 3) Third party modules- React,express



// let a=10

// let b=()=>{
//     return 2
// }

// console.log(a);//10
// console.log(b());//2

// exporting individually
// module.exports.a=15
// module.exports.b=()=>{
//     return 7
// }



//exporting combined
// module.exports={
//     a,b
// }


// default export
// let a=9
// let b=()=>{
//     return 4
// }

// module.exports=b
//here it exports b only




//named exports
export const name='J'
export const a=2
export function greet(){
    console.log(`hello ${name}`);
}