import express from 'express'
import cors from 'cors'

import { urlencoded } from 'body-parser'
import { routes } from '@config/routes'

export const app: express.Application = express ()

app.use (cors ({}))
app.use (urlencoded ({ extended: true }))
app.use (express.json ())
app.use ('/', routes)
