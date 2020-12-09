#!/usr/bin/env node
const net = require('net');

const client = new net.Socket();
client.connect({ port: 59090, host: process.argv[2] });
client.on('data', (data) => {
  console.log(data.toString('utf-8'));
});
