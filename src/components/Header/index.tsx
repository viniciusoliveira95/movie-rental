import { Container, Content } from './styles'
import { DebounceInput } from 'react-debounce-input';
import { useState } from 'react';

type HeaderProps = {
  handleOpenModal: (movieId?: string) => void;
}

export function Header({ handleOpenModal }: HeaderProps) {
  const [searchTitle, setSearchtitle] = useState('')

  return (
    <Container>
      <Content>
        <h1>Movie<span>.</span>Rental</h1>
        <div>
          <DebounceInput 
            minLength={3}
            debounceTimeout={1000}
            placeholder="Título do filme"
            onChange={event => setSearchtitle(event.target.value)}
            />
        </div>
        <button onClick={() => handleOpenModal()}>Adicionar</button>
      </Content>
    </Container>
  )
}