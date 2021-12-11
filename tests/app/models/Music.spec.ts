import { Music } from  '@models/Music'

describe ('Music Model', () => {
  it ('should get the property when its asigned', () => {
    const music = new Music ({ name: 'Halo' })

    music.set ('description', 'Halo, 2009. From Beyonce')

    expect (music.get ('name')).toBe ('Halo')
    expect (music.get ('description')).toBe ('Halo, 2009. From Beyonce')
  })

  it ('should create a music if sent valid datas', async () => {
    const music = new Music ({
      name: 'Halo',
      description: 'Halo, 2009. From Beyonce',
      year: 2009
    })

    expect (await music.save ()).toBeTruthy ()
  })

  it ('should fails creating a music if name is invalid', async () => {
    const music = new Music ({
      name: '',
      description: 'Halo, 2009. From Beyonce',
      year: 2009
    })

    expect (await music.save ()).toBeFalsy ()
  })

  it ('should get the music properties as a json object', () => {
    const music = new Music ({ name: 'Halo' })

    expect (music.toJson ()).toHaveProperty ('name')
  })
})
