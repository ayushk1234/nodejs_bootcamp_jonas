    const readline = require('readline')

    const fs = require('fs');
const { isUtf8 } = require('buffer');

    // const r1= readline.createInterface({
    //     input : process.stdin,
    //     output : process.stdout
    // })

    // r1.question('your name : ',(name) =>{
    //     console.log(name);
    //     r1.close();
    // } )

    // r1.on('close',() =>{
    //     console.log('interface close')
    //     process.exit(0);
    // })


  let textIn =  fs.readFileSync('./files/input.txt','utf-8');
  console.log(textIn)

