// A one time client for capitalization server

const net = require('net');

const client = new net.Socket();
client.connect({port:59898}, process.argv[2], () => {
    client.write(`${process.argv[3]}\r\n`)
});
client.on('data', (data) => {
    console.log(`Server responded with: ${data.toString('utf-8')}`);
    client.destroy();
})