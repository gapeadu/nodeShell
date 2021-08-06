process.stdin.on('data', (data)=> {
    const cmd = data.toString().trim();

    process.stdout.write('You type: ' + cmd);
});

const pwd = require('./pwd');
pwd();

const ls = require('./ls')
ls();
