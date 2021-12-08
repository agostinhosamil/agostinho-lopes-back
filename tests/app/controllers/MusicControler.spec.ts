import { Music } from '@models/Music'

describe ('Music Creation', () => {
  it ('should get the music list', () => {
    const music = new Music ('Ayo')

    expect (music.title).toBe ('Ayo')
  })
})
