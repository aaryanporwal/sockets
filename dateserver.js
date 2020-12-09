const { Socket } = require('dgram');
const net = require('net');

// A use-one date server. Client gets the date on connection and then exits
const server = net.createServer((socket) =>{
    socket.end(`${new Date()}\n`);
});

server.listen(59090);