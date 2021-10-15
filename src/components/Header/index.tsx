import { Container, Content } from './styles'
import { DebounceInput } from 'react-debounce-input';
import { useMovies } from '../../hooks/useMovies';

type HeaderProps = {
  handleOpenModal: (movieId?: string) => void;
}

export function Header({ handleOpenModal }: HeaderProps) {
  const { getMovieByTitle } = useMovies()

  async function handleSearch(searchTitle: string) {
    await getMovieByTitle(searchTitle)
  }

  return (
    <Container>
      <Content>
        <h1>Movie<span>.</span>Rental</h1>
        <div>
          <DebounceInput 
            minLength={3}
            debounceTimeout={1000}
            placeholder="Título do filme"
            onChange={event => handleSearch(event.target.value)}
            />
        </div>
        <button onClick={() => handleOpenModal()}>Adicionar</button>
      </Content>
    </Container>
  )
}