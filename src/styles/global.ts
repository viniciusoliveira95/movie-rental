import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-700: #323238;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;
    --cyan-500: #61dafb;
    --blue-500: #3182CE;
    --red-500: #E53E3E;
    --yellow-500: #eba417;
    --green-500: #38A169;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--white)
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--gray-900);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.5)
    }
  }
`