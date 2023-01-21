'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = ' ';
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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr, n) {
    
    var totalPositives = 0;
    var totalNegatives = 0;
    var zero = 0;
    arr.forEach(function(num){
        if (num > 0) {
            
            totalPositives =totalPositives + 1 ; 
        }
        if (num < 0) {
            totalNegatives = totalNegatives+ 1 ; 
        }
        if (num == 0) {
            zero = zero + 1;
        }
    })
    const percPositives = (totalPositives/arr.length).toFixed(6);
    const percNegatives = (totalNegatives/arr.length).toFixed(6);
    const percZero = (zero/arr.length).toFixed(6);
    console.log(percPositives);
    console.log(percNegatives);
    console.log(percZero);
    }


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
