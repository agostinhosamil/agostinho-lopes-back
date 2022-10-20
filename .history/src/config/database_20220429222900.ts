import { DatabaseConfig } from './types'
import { env } from  './env'

export const database: DatabaseConfig = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  name: process.env.DB_NAME || `agostinho-lopes-back_${ env }`,
  pass: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root'
}
