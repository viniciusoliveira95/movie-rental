import Modal from 'react-modal';
import { Home } from './components/Home'
import { MoviesProvider } from './hooks/useMovies'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  return (
  <>
    <MoviesProvider>
      <GlobalStyle />
      <Home />
    </MoviesProvider>
  </>
  );
}
