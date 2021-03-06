const prompt = (data) => {
    console.log(data);
    process.stdout.write("> ");
  };
//data is whatever the user types into the line under prompt in command line
const main = (data) => {
  const cmd = data.toString().trim();
  const [command, arg] = cmd.split(" ");
  switch (command) {
    case "pwd":
      require("./pwd")();
      break;
    case "ls":
      require("./ls")();
      break;

    default:
      console.log("Command Not Found");
  }
};
//on listening for changes in the input
process.stdin.on('data', main);



