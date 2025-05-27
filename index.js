const http = require('http'); // Node.js built-in module for HTTP

const hostname = '0.0.0.0'; // Listen on all available network interfaces
const port = process.env.PORT || 3000; // Use port provided by hosting, or 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from a Super Simple Node.js App!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});
