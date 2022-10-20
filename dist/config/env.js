"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv/config');
}

const env = process.env.NODE_ENV || 'development';
exports.env = env;