import styled from 'styled-components'

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
`

export const Content = styled.header`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    span {
      color: var(--yellow-500);
    }
  }

  div {
    input {
      height: 2.5rem;
      padding: 0 2rem;
      outline: 0;
      border: 1px solid var(--gray-700);
      border-radius: 2rem;
      background-color: var(--gray-700);
      color: var(--white);

      &::placeholder {
        color: var(--gray-300)
      }

      &:focus {
        outline: 1px solid var(--yellow-500);
      }
    }
  }

  a {
    transition: color 0.2s;
    font-weight: bold;
  
    &:hover {
      color: var(--yellow-500);
    }
  }
`