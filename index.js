const file = require('fs')

const os = require('os')
console.log('threads___', os.cpus())

// write file

// file.writeFileSync('./file.text', "File created by node file system")
// file.writeFile('./file.txt', "file created by write", (error)=>{console.error(error)})


// read file
// synchorunsly 

//  const result = file.readFileSync('./day01/contact.txt', 'utf-8')
 
//  console.log(result)


// async read

// file.readFile('./Day01/contact.txt', 'utf-8', (err, res)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log("result",res)
//     }
// })

// append file

// file.appendFileSync('./file.txt', `${Date.now()} hey there\n`)


// similar we can do  so many thing with fs modlue copy read write append anfd many more


// to get the stats of file

// console.log('states', file.statSync('./file.txt'))
