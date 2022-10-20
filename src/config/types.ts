type DatabaseConfigProperty = string

type DatabaseNumberProperty = string | number
export interface DatabaseConfig {
  type: DatabaseConfigProperty
  name: DatabaseConfigProperty
  host: DatabaseConfigProperty
  port: DatabaseNumberProperty
  user: DatabaseConfigProperty
  pass: DatabaseConfigProperty
}
