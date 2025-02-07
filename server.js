const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  // Simulate a long-running process
  for (let i = 0; i < 1000000000; i++) {
    // Do something
  }

  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});