// Works fine locally, times out in Azure

const http = require('http');

const hostname = '127.0.0.1'; // this needs to be 0.0.0.0 to work
const port = 3000; // this needs to be process.env.PORT to work

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});