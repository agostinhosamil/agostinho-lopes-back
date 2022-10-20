"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

var _routes = require("../config/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;
app.use((0, _cors.default)({}));
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use(_express.default.json());
app.use('/', _routes.routes);