import { Container, Card, CardContent, PosterContainer, ButtonsContainer } from './styles'
import poster from '../../assets/poster.jpg'
import { Header } from '../Header'

export function Home() {
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
              <button>Editar</button>
              <button>Exluir</button>
            </ButtonsContainer>
          </CardContent>
        </Card>

      </Container>
    </>
  )
}