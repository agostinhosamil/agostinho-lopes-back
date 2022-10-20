if (process.env.NODE_ENV !== 'production') {
  require('dotenv/config')
}

export const env: string = process.env.NODE_ENV || 'development'
