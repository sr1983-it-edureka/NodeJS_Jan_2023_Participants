
import http from "http";

const PORT = 8081;

export const server = http.createServer ( (req, res) => {

    res.end("Hello - ES6 Code - Import, New Features, More New Feature...")

}).listen(PORT);
