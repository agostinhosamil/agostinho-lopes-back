import { database } from './config/database'

import path from 'path'

interface KnexConfigDatabaseConfig {
  database: typeof database.name,
  user: typeof database.user,
  password: typeof database.pass,
  port?: typeof database.port,
  host?: typeof database.host
}

export interface KnexConfig {
  development: {
    client: typeof database.type,
    connection: KnexConfigDatabaseConfig,
    pool: {
      min: number,
      max: number
    },
    migrations: {
      tableName: string,
      directory: string
    },
    seeds: {
      directory: string
    }
  },

  staging: {
    client: string,
    connection: KnexConfigDatabaseConfig,
    pool: {
      min: number,
      max: number
    },
    migrations: {
      tableName: string
      directory: string
    },
    seeds: {
      directory: string
    }
  },

  production: {
    client: string,
    connection: KnexConfigDatabaseConfig,
    pool: {
      min: number,
      max: number
    },
    migrations: {
      tableName: string
    }
  }
}

const knexConfig: KnexConfig = {

  development: {
    client: database.type,
    connection: {
      database: database.name,
      user: database.user,
      password: database.pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, 'src', 'database', 'migrate')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seed')
    }
  },

  staging: {
    client: database.type,
    connection: {
      database: database.name,
      user: database.user,
      password: database.pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, 'src', 'database', 'migrate'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seed')
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

}

const envKey = process.env.NODE_ENV === 'test' ? 'staging' : process.env.NODE_ENV || 'development'

export default knexConfig[envKey as keyof KnexConfig]
