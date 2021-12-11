import request from 'supertest'

import { app } from '@app'

describe ('Music Creation', () => {
  it ('should get the music list', async () => {
    const response = await request (app)
      .get ('/musics')

    expect (response.status).toBe (200)
    expect (response.body).toBeInstanceOf (Array)
  })

  it ('should get a music given an id', async () => {
    const response = await request (app)
      .get ('/musics/3')

    expect (response.status).toBe (200)
    expect (response.body).toBeInstanceOf (Object)
    expect (response.body).toHaveProperty ('name')
  })

  it ('should get a music by a name filter', async () => {
    const response = await request (app)
      .get ('/musics/autocomplete/Halo')

    expect (response.status).toBe (200)
    expect (response.body).toBeInstanceOf (Array)
  })

  it ('should create a user if datas are sent correctly', async () => {
    const response = await request (app)
      .post ('/musics')
      .send ({
        music: {
          name: "Ayo",
          description: "A song from Chris Brown And Tyga, 2011",
          year: 2011
        }
      })

    expect (response.status).toBe (200)
  })

  it ('should fail creating a user if datas are not sent correctly', async () => {
    const response = await request (app)
      .post ('/musics')
      .send ({
        name: "Ayo",
        description: "A song from Chris Brown And Tyga, 2011",
        year: 2011
      })

    expect (response.status).toBe (400)
  })
})
