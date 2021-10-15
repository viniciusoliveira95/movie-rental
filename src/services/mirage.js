import { createServer, Model } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {
      movie: Model
    },
  
    seeds(server) {
      server.db.loadData({
        movies: [
          {
            id: 1,
            title: 'A volta dos que não foram',
            value: '10,99',
            genre: 'Ação, Romance, Horror, Aventura',
            ageGroup: 'livre',
            posterUrl: 'https://picsum.photos/300/400?random=1',
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title: 'As tranças de rei careca',
            value: '10,99',
            genre: 'Ação, Drama, Aventura',
            ageGroup: '12 anos',
            posterUrl: 'https://picsum.photos/300/400?random=2',
            createdAt: new Date('2021-02-14 11:00:00')
          }
        ]
      })
    },
  
    routes() {
      this.namespace = 'api'
  
      this.get('/movies', (schema, request) => {
        const { title } = request.queryParams

        if (title) {
          const shchemas = schema.where('movie', m => m.title.includes(title))
          return shchemas
        }

        return schema.all('movie')
      })
  
      this.post('/movies', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        
        return schema.create('movie', { ...data, createdAt: new Date() })
      })

      this.put('/movies/:id', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        const { id } = request.params

        return schema.find('movie', id).update(data)
      })

      this.delete('/movies/:id', (schema, request) => {
        const { id } = request.params

        return schema.find('movie', id).destroy()
      })
    }
  })

  return server
}