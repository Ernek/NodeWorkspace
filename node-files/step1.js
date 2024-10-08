const fs = require('fs');

const path = process.argv[2];
// console.log(process.argv[1])
// console.log(process.argv[2])

function cat(path) {
    fs.readFile(`${path}`, 'utf-8', function(err, data) {
        if (err) {
            console.log(err)
            process.exit(2)
        }
        
        console.log(data)
        
    })
}

cat(path)