import { app } from '@app'
import { log } from '@config/log'

app.listen (process.env.PORT || 3333, () => {
  log (`Server Started at: ${new Date ().toISOString ()}`)
})
