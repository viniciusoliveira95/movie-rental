import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

type Movie = {
  id: string
  title: string
  value: string
  genre: string
  ageGroup: string
  posterUrl: string
  createdAt: string
}

type MovieInput = {
  id?: string
  title: string
  value: string
  genre: string
  ageGroup: string
  posterUrl: string
}

type MoviesProviderProps = {
  children: ReactNode
}

type MoviesContextData = {
  movies: Movie[]
  saveMovie: (movie: MovieInput, movieId?: string) => Promise<void>
  getMovieByTitle: (tittle?: string) => Promise<void>
  deleteMovie: (id: string) => Promise<void>
}

const MovieContext = createContext<MoviesContextData>({} as MoviesContextData)

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    api.get('/movies')
      .then(({data}) => setMovies(data.movies))
  }, [])

  async function saveMovie(movieInput: MovieInput, movieId?: string) {
    if (movieId) {
      const response = await api.put(`/movies/${movieId}`, movieInput)
      const { movie } = response.data
      setMovies([...movies.filter(m => m.id !== movieId), movie])
      
      return
    }
    
    const response = await api.post('/movies', movieInput)
    const { movie } = response.data
    setMovies([...movies, movie])
  }

  async function getMovieByTitle(title?: string) {
    if (title) {
      const response = await api.get('/movies', {
        params: { title }
      })
      const { movies } = response.data
      setMovies(movies)

      return
    }
    const response = await api.get('/movies')
    const { movies } = response.data
    setMovies(movies)
  }

  async function deleteMovie(id: string) {
    await api.delete(`/movies/${id}`)
    setMovies([...movies.filter(m => m.id !== id)])
  }

  return (
    <MovieContext.Provider value={{ movies, saveMovie, getMovieByTitle, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MovieContext)
  return context
}