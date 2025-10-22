const fs = require("fs");
const os = require("os");

fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Err: ${err}`);
  } else {
    console.log(`File content: ${data}`);
  }
});

fs.writeFile("./output.txt", "This is the file output", (err) => {
  if (err) {
    console.log(`Err: ${err}`);
  } else {
    console.log("File output successful");
  }
});

console.log(`Hostname: ${os.hostname()}`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`Number of CPUs: ${os.cpus().length}`);

// readFile and writeFile completed later because it is async function, which does not block other operations
