"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PORT = 8081;
const server = _http.default.createServer((req, res) => {
  res.end("Hello - ES6 Code - Import, New Features...");
}).listen(PORT);
exports.server = server;