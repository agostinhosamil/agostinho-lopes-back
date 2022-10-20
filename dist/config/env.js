"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;
const nodeENV = `${process.env.NODE_ENV}`;

if (['development', 'test'].indexOf(nodeENV) >= 0) {
  require('dotenv/config');
}

const env = nodeENV || 'development';
exports.env = env;