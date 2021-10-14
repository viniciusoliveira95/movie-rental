import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  max-height: 400px;

  background: var(--gray-800);
  border-radius: 0.25rem;

  img {
    border-radius: 0.25rem 0.25rem 0 0;
    max-width: 100%;
    height: auto;
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: bold;
    font-size: 1.125rem;
    margin-top: 0.5rem;
  }

  div {
    margin-top: 0.5rem;

    span {
      margin-right: 1rem;
      padding: 0 0.5rem;
      background: var(--gray-300);
      border-radius: 0.5rem;
    }
  }

`;

export const PosterContainer = styled.div`
  height: 300px;
  overflow: hidden;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  button {
    width: 100px;
    height: 40px;
    background: var(--blue-500);
    border: none;
    color: var(--white);
    font-weight: bold;
    font-size: 1.125rem;
    transition: filter 0.2s;
    border-radius: 0 0.25rem 0 0.25rem;
  
    &:hover {
      filter: brightness(0.8)
    }

    &:nth-child(2) {
      background: var(--red-500);
      border-radius: 0 0 0 0.25rem;
    }
  }
`