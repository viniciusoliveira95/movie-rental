import Modal from 'react-modal'
import { FormEvent, useState } from 'react'

import closeImg from '../../assets/close.svg'

import { Container } from './styles'

type MovieData = {
  id: string
  title: string
  value: string
  genre: string
  ageGroup: string
  posterUrl: string
}

type MovieModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  modalData: MovieData
}

export function MovieModal({ isOpen, onRequestClose, modalData }: MovieModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [genre, setGenre] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [posterUrl, setPosterUrl] = useState('')

  async function handleSaveMovie(event: FormEvent) {
    console.log(modalData)
    event.preventDefault()
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
          value={modalData.title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <input 
          placeholder="Valor ex: 10,99"
          value={modalData.value}
          onChange={event => setValue(event.target.value)}
        />

        <input 
          placeholder="Gêneros" 
          value={modalData.genre}
          onChange={event => setGenre(event.target.value)}
        />

        <input 
          placeholder="Faixa etária" 
          value={modalData.ageGroup}
          onChange={event => setAgeGroup(event.target.value)}
        />

        <input 
          placeholder="Url do poster" 
          value={modalData.posterUrl}
          onChange={event => setPosterUrl(event.target.value)}
        />
        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  )
}