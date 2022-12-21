const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end("<html><body><h1>Hello World!</h1></body></html>");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
