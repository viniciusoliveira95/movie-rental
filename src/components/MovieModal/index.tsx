import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { useMovies } from '../../hooks/useMovies'

import { Container } from './styles'
import closeImg from '../../assets/close.svg'

type MovieModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  movieId?: string
}

export function MovieModal({ isOpen, onRequestClose, movieId }: MovieModalProps) {
  const { saveMovie } = useMovies()
  
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [genre, setGenre] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [posterUrl, setPosterUrl] = useState('')

  async function handleSaveMovie(event: FormEvent) {
    event.preventDefault()
    
    await saveMovie({
      title,
      value,
      genre,
      ageGroup,
      posterUrl
    }, movieId)

    setTitle('')
    setValue('')
    setGenre('')
    setAgeGroup('')
    onRequestClose()
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleSaveMovie}>
        <h2>Salvar filme</h2>
        <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <input 
          placeholder="Valor ex: 10,99"
          value={value}
          onChange={event => setValue(event.target.value)}
        />

        <input 
          placeholder="Gêneros" 
          value={genre}
          onChange={event => setGenre(event.target.value)}
        />

        <input 
          placeholder="Faixa etária" 
          value={ageGroup}
          onChange={event => setAgeGroup(event.target.value)}
        />

        <input 
          placeholder="Url do poster" 
          value={posterUrl}
          onChange={event => setPosterUrl(event.target.value)}
        />
        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  )
}