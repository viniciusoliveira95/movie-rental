import { Container, Card, CardContent, PosterContainer } from './styles'
import poster from '../../assets/poster.jpg'

export function Home() {
  return(
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
          <button>Alugar</button>
        </CardContent>
      </Card>

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
          <button>Alugar</button>
        </CardContent>
      </Card>

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
          <button>Alugar</button>
        </CardContent>
      </Card>

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
          <button>Alugar</button>
        </CardContent>
      </Card>

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
          <button>Alugar</button>
        </CardContent>
      </Card>
    </Container>
  )
}