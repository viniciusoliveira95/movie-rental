import { Container, Card, CardContent, PosterContainer, ButtonsContainer } from './styles'
import poster from '../../assets/poster.jpg'
import { Header } from '../Header'
import { MovieModal } from '../MovieModal'
import { useState } from 'react'

export function Home() {
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
        <Card>
          <PosterContainer>
            <img src={poster} alt="poster" />
          </PosterContainer>
          <CardContent>
            <p>Titulo do filme</p>
            <div>
              <span>Ação</span>
              <span>Fantasia</span>
              <span>Suspense</span>
            </div>
            <ButtonsContainer>
              <button onClick={() => handleOpenMovieModal('id')}>Editar</button>
              <button>Exluir</button>
            </ButtonsContainer>
          </CardContent>
        </Card>

      </Container>

      <MovieModal movieId={movieId} isOpen={isMovieModalOpen} onRequestClose={handleCloseMovieModal}/>
    </>
  )
}