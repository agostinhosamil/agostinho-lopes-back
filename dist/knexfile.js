"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = require("./config/database");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const knexConfig = {
  development: {
    client: _database.database.type,
    connection: {
      database: _database.database.name,
      user: _database.database.user,
      password: _database.database.pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: _path.default.resolve(__dirname, 'src', 'database', 'migrate')
    },
    seeds: {
      directory: _path.default.resolve(__dirname, 'src', 'database', 'seed')
    }
  },
  staging: {
    client: _database.database.type,
    connection: {
      database: _database.database.name,
      user: _database.database.user,
      password: _database.database.pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: _path.default.resolve(__dirname, 'src', 'database', 'migrate')
    },
    seeds: {
      directory: _path.default.resolve(__dirname, 'src', 'database', 'seed')
    }
  },
  production: {
    client: "mysql",
    connection: {
      database: `${process.env.DB_NAME}`,
      user: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASS}`,
      port: `${process.env.DB_PORT}`,
      host: `${process.env.DB_HOST}`
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
const envKey = process.env.NODE_ENV === 'test' ? 'staging' : process.env.NODE_ENV || 'development';
var _default = knexConfig[envKey];
exports.default = _default;