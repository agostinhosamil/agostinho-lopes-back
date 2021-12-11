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
  protected tableName = 'musics'
  protected static tableName = 'musics'

  protected requireds = ['name']
  
  static async all (): Promise<MusicTypes[] | void> {    
    const musicList = await knex<MusicTypes> (this.tableName)
      .select ('*')
    
    return musicList
  }

  static async search (musicQueryDatas: MusicTypes): Promise<MusicTypes[]> {

    const query = knex (this.tableName)
      .select ('*')

    Object.keys (musicQueryDatas).map ((key, index) => {
      const value = `%${musicQueryDatas [key as keyof MusicTypes]}%`

      if (index === 0) {
        query.where (key, 'like', value)
      } else {
        query.andWhere (key, 'like', value)
      }
    })

    const queryResultList = await query

    return queryResultList
  }

  static async findById (id: number): Promise<MusicTypes> {    
    const musicList = await knex (this.tableName)
      .select ('*')
      .where ({ id })
    
    return musicList.length >= 1 ? musicList [0] : null
  }
}
