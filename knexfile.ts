import { database } from './src/config/database'

import path from 'path'

export interface KnexConfig {
  development: {
    client: typeof database.type,
    connection: {
      database: typeof database.name,
      user: typeof database.user,
      password: typeof database.pass
    },
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
    connection: {
      database: string,
      user: string,
      password: string
    },
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
    connection: {
      database: string,
      user: string,
      password: string
    },
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
      directory: path.resolve (__dirname, 'src', 'database', 'migrate')
    },
    seeds: {
      directory: path.resolve (__dirname, 'src', 'database', 'seed')
    }
  },

  staging: {
    client:  database.type,
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
      directory: path.resolve (__dirname, 'src', 'database', 'migrate'),
    },
    seeds: {
      directory: path.resolve (__dirname, 'src', 'database', 'seed')
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
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

export default knexConfig [envKey as keyof KnexConfig]
