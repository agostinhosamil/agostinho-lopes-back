import knex from '@config/knex'
import { pluralize } from '@utils/pluralize'

interface DefaultModelType {
  id?: number
  created_at?: Date
  updated_at?: Date
}

export class AppModel<ModelType = DefaultModelType> {
  protected tableName: string = ''
  private modelDatas: DefaultModelType = {}

  protected requireds: string[] = []

  constructor (data?: ModelType) {
    Object.assign (this.modelDatas, data)
  }

  get (property: string): any {
    if (typeof this.modelDatas [property as keyof DefaultModelType] !== typeof undefined) {
      return this.modelDatas [property as keyof DefaultModelType]
    }
  }

  set (property: string, value: any) {
    this.modelDatas [property as keyof DefaultModelType] = value
  }

  private fillProps () {
    this.modelDatas.created_at = new Date ();
    this.modelDatas.updated_at = new Date ();
  }

  async save (): Promise<boolean | void> {
    this.fillProps ()

    for (const requiredProp of this.requireds) {
      if (!this.get (requiredProp)) return
    }

    await knex<DefaultModelType> (this.modelClassName)
      .insert (this.modelDatas)

    return true
  }

  toJson (): DefaultModelType {
    return this.modelDatas;
  }

  get modelClassName () {
    return pluralize (this.constructor.name)
  }

  static get modelClassName () {
    const Sel = this

    return pluralize (new Sel().constructor.name)
  }

  static async all<ModelType = any> (): Promise<any[]> {
    const musicList = await knex (this.modelClassName)
      .select<ModelType[]> ('*')

    return musicList
  }

  static async findById<ModelType = any> (id: number): Promise<ModelType> {
    const data = await knex (this.modelClassName)
      .select<ModelType> ('*')
      .where ({ id })
      .first ()

    return data
  }

  static async search<ModelType = any> (queryDatas: ModelType): Promise<ModelType[]> {

    const query = knex (this.modelClassName)
      .select ('*')

    Object.keys (queryDatas).map ((key, index) => {
      const value = `%${queryDatas [key as keyof ModelType]}%`

      if (index === 0) {
        query.where (key, 'like', value)
      } else {
        query.andWhere (key, 'like', value)
      }
    })

    const queryResultList = await query

    return queryResultList
  }
}
