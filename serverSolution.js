const http = require('http');
const stream = require('stream');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  const rs = new stream.Readable();
  rs._read = () => {}; // Nothing to read

  // Simulate a long-running process, but stream the data instead of blocking
  let i = 0;
  const interval = setInterval(() => {
    rs.push('Processing... ' + i++ + '\n');
    if (i > 10) {
      clearInterval(interval);
      rs.push(null);
    }
  }, 100);

  rs.pipe(res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});