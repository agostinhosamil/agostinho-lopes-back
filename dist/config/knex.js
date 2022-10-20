"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../knexfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connection = (0, _knex.default)(_knexfile.default);
var _default = connection;
exports.default = _default;