const nodeENV: string = `${process.env.NODE_ENV}`

if (['development', 'test'].indexOf(nodeENV) >= 0) {
  require('dotenv/config')
}

export const env: string = nodeENV || 'development'
