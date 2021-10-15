import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid var(--gray-700);
    background-color: var(--gray-700);
    color: var(--white);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-300)
    }

    &:focus {
      outline: 1px solid var(--yellow-500);
    }

    & + input {
      margin-top: 1rem;
    }
  }


  button {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green-500);
      color: var(--white);
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9)
      }
  }
`
