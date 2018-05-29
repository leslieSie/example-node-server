import http from 'http';
import config from '../config';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(config.port, config.host);

console.log(`Server running at http://${config.host}:${config.port}/`);