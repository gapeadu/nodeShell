// module.exports = function(){
//     const fs = require('fs');
//     fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//       throw err
//     } else {
//       process.stdout.write(files.join('\n'))
//       process.stdout.write("prompt > ")
//     }
//   })

//   }

module.exports = function (fileName) {
  const fs = require("fs");
  // print out the contents of the file
  
    fs.readFile(fileName, "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("prompt > ");
      }
    });
    // try {
    //   const data = await fs.readFile(filePath);
    //   console.log(data.toString());
    // } catch (error) {
    //   console.error(`Got an error trying to read the file: ${error.message}`);
    // }
  
};
