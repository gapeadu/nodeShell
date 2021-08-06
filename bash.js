process.stdout.write('prompt > ');

process.stdin.on('data', (data)=> {
    const cmd = data.toString().trim();

    process.stdout.write('You type: ' + cmd);
    process.stdout.write('\nprompt > ');

    if(cmd === 'pwd'){
        //process.stdout.write('/Users/gabriellaapeadu/node-shell');
        console.log(process.cwd());
    }
});

