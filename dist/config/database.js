"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;

var _env = require("./env");

const database = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  name: process.env.DB_NAME || `agostinho-lopes-back_${_env.env}`,
  pass: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root'
};
exports.database = database;