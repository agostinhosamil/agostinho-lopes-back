import { Request, Response } from 'express'

import { Music, MusicRecord, MusicTypes } from '@models/Music'

interface RequestParamList {
  id: number
  music_name: string
}
export class MusicController {
  async index (req: Request, res: Response): Promise<Response> {

    const list = await Music.all ();

    return res.send (list)
  }

  async show (req: Request<RequestParamList, MusicTypes>, res: Response<MusicTypes>): Promise<Response> {
    const music = await Music.findById<MusicTypes> (req.params.id)

    return res.send (music)
  }

  async autocomplete (req: Request<RequestParamList, MusicTypes[]>, res: Response<MusicTypes[]>): Promise<Response> {
    const musics = await Music.search ({
      name: req.params.music_name,
      description: req.params.music_name
    })

    return res.send (musics)
  }

  async store (req: Request<any, Music, MusicRecord>, res: Response<Music>): Promise<Response> {

    const { music: musicDatas } = req.body
    const music = new Music (musicDatas)

    const saveResult = await music.save ()

    if (!saveResult) {
      return res.status (400).send ()
    }

    return res.send (music)
  }
}
