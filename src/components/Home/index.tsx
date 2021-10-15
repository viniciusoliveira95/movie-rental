import { Container, Card, CardContent, PosterContainer, ButtonsContainer } from './styles'
import poster from '../../assets/poster.jpg'
import { Header } from '../Header'
import { MovieModal } from '../MovieModal'
import { useState } from 'react'

export function Home() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    id: '',
    title: '',
    value: '',
    genre: '',
    ageGroup: '',
    posterUrl: ''
  })

  function handleOpenMovieModal() {
    setModalData({
      id: '1',
      title: 'Titulo',
      value: 'valor',
      genre: 'genero',
      ageGroup: '18',
      posterUrl: 'http://image.com'
    })
    setIsMovieModalOpen(true)
  }

  function handleCloseMovieModal() {
    setIsMovieModalOpen(false)
  }

  return(
    <>
      <Header />
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
              <button onClick={handleOpenMovieModal}>Editar</button>
              <button>Exluir</button>
            </ButtonsContainer>
          </CardContent>
        </Card>

      </Container>

      <MovieModal modalData={modalData} isOpen={isMovieModalOpen} onRequestClose={handleCloseMovieModal}/>
    </>
  )
}