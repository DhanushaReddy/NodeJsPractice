// const fileRead=require("fs/promises")

// (async ()=>{

//     let file= try{

//     await fileRead.readFile("./PromiseApi.txt","utf-8")
//         console.log(file);
//     }
//     catch(error)
//     {
        
//     }
// })
// fileRead.readFile("./CallApi.txt","utf-8",(error,data)=>{
//     if(error) console.log(error);
//     console.log(data);
// })




//creating folders and files using promise api
// const fs=require("fs/promises");
// async function createSrc()
// {
//     try {
//         await fs.mkdir("./src")
//         await fs.mkdir("./src/routers")
//         await fs.writeFile("./src/routers/userRouter.js","")
//         await fs.mkdir("./src/controllers")
//         await fs.writeFile("./src/controllers/userControllers.js","")

       
//     } catch (error) {
//         console.log(error);
//     }
// }

// createSrc()


// async function createviews()
// {
//     try {
//         await fs.mkdir("./views")
//         await fs.writeFile("./views/home.js","")
//         await fs.writeFile("./views/about.js","")

       
//     } catch (error) {
//         console.log(error);
//     }
// }

// createviews()



// async function createpublic()
// {
//     try {
//         await fs.mkdir("./public")
//         await fs.writeFile("./public/index.html","")
//         await fs.writeFile("./public/index.js","")
//         await fs.writeFile("./public/style.css","")


       
//     } catch (error) {
//         console.log(error);
//     }
// }

// createpublic()


// async function createmodels()
// {
//     try {
//         await fs.mkdir("./models")
//         await fs.writeFile("./models/product.js","")
//         await fs.writeFile("./models/user.js","")
       


       
//     } catch (error) {
//         console.log(error);
//     }
// }

// createmodels()



//deleting file
const fs=require("fs/promises")

//creates
// async function createmodels()
// {
//     try {
//         await fs.mkdir("./models")
//         await fs.writeFile("./models/product.js","")
       


       
//     } catch (error) {
//         console.log(error);
//     }
// }

//deletes
// async function createmodels()
// {
//     try{
//         await fs.unlink("./product.js")
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// createmodels()

//remove folder
// async function createmodels()
// {
//     try {
//         await fs.rmdir("./models")
        


       
//     } catch (error) {
//         console.log(error);
//     }
// }
