const fs = require('fs'); //fs is a commonly used library to access any file (fs = File System)
const breedDetailsFromFile = function(breed, cb) { //passing in callback function
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', function(error, data) {
    if (!error) {
      cb(data); //calling callback function
    } else {
      cb(undefined);
    }
  })
};
// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = details => {
  console.log('Return Value: ', details) // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);
module.exports = breedDetailsFromFile;