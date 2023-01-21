'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    if (s.indexOf('PM') !== -1){
        if(s.substring(0,2) == '12'){
            s.replace(s.substring(0,2), '12');
            s = s.substring(0,8)
        }
        else{
            let hora = parseInt(s.substring(0,2))+12;
            hora = hora.toString();
            s = hora.concat(s.substring(2,8));
        }
    }
    else {
        if(s.substring(0,2) == '12'){
            let hora = '00';
            s = hora.concat(s.substring(2,8));
        }
        else{
           s = s.substring(0,8); 
        }
    }
    return s;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
