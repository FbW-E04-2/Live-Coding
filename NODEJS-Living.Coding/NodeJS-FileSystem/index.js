const fs = require("fs")
const {exec} = require("child_process")

exec("code", (err,stdout, stderr )=>{
    console.log(stdout)
})


/* 
console.log("start") */
//make directory 

/* fs.mkdirSync("./folder") */


//create a File and add data into that file
/* fs.writeFileSync("./test.txt", "New text into that file") */

//add more data into a file
/* fs.appendFileSync("./test.txt", `
adding new data into our file,
this is new line  ` ) */

//read data from file
/* const data = fs.readFileSync("./test.txt","utf8")
console.log(data)
 */

/* let data = fs.readFileSync("./copyapp.js")

fs.writeFileSync("./App.js", data) */

//copy one file into another
/* fs.copyFileSync("./test.txt", "./test1.txt") */


//rename file
/* fs.renameSync("./test1.txt", "./copyFile.txt") */

//delete file
/* fs.unlinkSync("./copyFile.txt") */


//what are the streams in nodejs

/* let readStream = fs.createReadStream("./test.txt")
let writeStream = fs.createWriteStream("./copyfile.txt") 
readStream.pipe(writeStream) */

/* readStream.on("data",(data)=>{
    console.log(data)
    writeStream.write(data)
}) */

/* console.log("end") */









