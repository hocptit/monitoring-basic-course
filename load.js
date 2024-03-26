const crypto = require('crypto');

function generateLargeArray() {
    let largeArray = [];
    for (let i = 0; i < 1e7; i++) {
        largeArray.push(i);
    }
    return largeArray;
}

function performCpuIntensiveTask() {
    for (let i = 0; i < 1e7; i++) {
        crypto.createHash('sha256').update(i.toString()).digest('hex');
    }
}

setInterval(() => {
    console.log('Generating large array...');
    generateLargeArray();
    console.log('Performing CPU intensive task...');
    performCpuIntensiveTask();
}, 1000);