import knexConfig, { KnexConfig as BaseKnexConfig } from './src/knexfile'

export interface KnexConfig extends BaseKnexConfig { }

export default knexConfig
