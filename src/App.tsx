import Modal from 'react-modal';
import { Home } from './components/Home'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  return (
  <>
    <GlobalStyle />
    <Home />
  </>
  );
}
