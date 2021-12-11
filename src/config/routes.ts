import { Router } from 'express'

import { music, page } from '@controllers'

export const routes = Router ()

routes.get('/', page.index)
routes.get ('/musics', music.index)
routes.get ('/musics/:id', music.show)
routes.get ('/musics/autocomplete/:music_name', music.autocomplete)
routes.post ('/musics', music.store)
