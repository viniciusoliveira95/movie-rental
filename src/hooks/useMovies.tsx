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
}

const MovieContext = createContext<MoviesContextData>({} as MoviesContextData)

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    api.get('/movies')
      .then(({data}) => setMovies(data.movies))
  }, [])

  async function saveMovie(movieInput: MovieInput, movieId?: string) {
    console.log(movieId)
    if (movieId) {
      const response = await api.put('/movies', movieInput)
      const { movie } = response.data
      setMovies([...movies, movie])
      
      return
    }
    
    const response = await api.post('/movies', movieInput)
    const { movie } = response.data
    setMovies([...movies, movie])
  }

  return (
    <MovieContext.Provider value={{ movies, saveMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MovieContext)
  return context
}