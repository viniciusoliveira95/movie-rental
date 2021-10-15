import { Container, Card, CardContent, PosterContainer, ButtonsContainer } from './styles'
import { Header } from '../Header'
import { MovieModal } from '../MovieModal'
import { useState } from 'react'
import { useMovies } from '../../hooks/useMovies'

export function Home() {
  const { movies } = useMovies()
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false)
  const [movieId, setMovieId] = useState('')

  function handleOpenMovieModal(movieId?: string) {
    if (movieId) {
      setMovieId(movieId)
    }
    setIsMovieModalOpen(true)
  }

  function handleCloseMovieModal() {
    setMovieId('')
    setIsMovieModalOpen(false)
  }

  return(
    <>
      <Header handleOpenModal={handleOpenMovieModal}/>
      <Container >
        { movies.length ? (
          movies.map(movie => (
            <Card key={movie.id}>
              <PosterContainer>
                <img src={movie.posterUrl} alt="poster" />
              </PosterContainer>
              <CardContent>
                <p>{movie.title}</p>
                <div>
                  <span>Ação</span>
                  <span>Fantasia</span>
                  <span>Suspense</span>
                </div>
                <ButtonsContainer>
                  <button onClick={() => handleOpenMovieModal(movie.id)}>Editar</button>
                  <button>Exluir</button>
                </ButtonsContainer>
              </CardContent>
            </Card>
          )) 
        ) :
        <p>Não foi encontrado nenhum filme</p>
      }
        

      </Container>

      <MovieModal movieId={movieId} isOpen={isMovieModalOpen} onRequestClose={handleCloseMovieModal}/>
    </>
  )
}