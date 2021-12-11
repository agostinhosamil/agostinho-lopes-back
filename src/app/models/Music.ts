import { AppModel } from '@models/AppModel'

export interface MusicTypes {
  id?: number
  name?: string
  year?: number
  description?: string
}

export interface MusicRecord {
  music: MusicTypes
}

export class Music extends AppModel<MusicTypes> {
  protected requireds = ['name']
}
