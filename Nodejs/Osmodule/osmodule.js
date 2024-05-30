const os=require("os")

console.log(os.availableParallelism());//4

console.log(os.freemem());//....
console.log(os.totalmem());//....
console.log(os.cpus());//
console.log(os.cpus().length);//4
console.log(os.hostname());//catlady
console.log(os.platform());//win32
console.log(os.arch());//x64
console.log(os.release());//10.0.22621
console.log(os.homedir());//C:\Users|WELCOME
console.log(os.type());//Windows_NT
console.log(os.getPriority());//0
console.log(os.tmpdir());//C:\Users\WELCOME\AppData\Local\Temp
console.log(os.machine());//x86_64





