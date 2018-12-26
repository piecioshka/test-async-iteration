const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    res.json = (...args) => res.end(JSON.stringify(...args));
    switch (req.url) {
        case '/': return res.json({ url: '/qqqqqq' });
        case '/qqqqqq': return res.json({ url: '/wwwwww' });
        case '/wwwwww': return res.json({ url: '/eeeeee' });
        case '/eeeeee': return res.json({ url: '/rrrrrr' });
        case '/rrrrrr': return res.json({ data: 'hello world' });
        default:
            res.json({ error: `not found ${req.url}` });
    }
}).listen(port, () => {
    console.log(`Server is started at http://localhost:${port}/`);
});
