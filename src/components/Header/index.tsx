import { Container, Content } from './styles'
import { DebounceInput } from 'react-debounce-input';
import { useEffect, useState } from 'react';

export function Header() {
  const [searchTitle, setSearchtitle] = useState('')
  useEffect(() => {})
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
        <a href="/">Adicionar</a>
      </Content>
    </Container>
  )
}