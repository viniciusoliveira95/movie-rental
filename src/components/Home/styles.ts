import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
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
    padding-top: 0.5rem;
  }

  div {
    padding: 0.5rem 0;

    span {
      margin-right: 1rem;
      padding: 0 0.5rem;
      background: var(--gray-300);
      border-radius: 0.5rem;
    }
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 0.5rem;
    background: var(--yellow-500);
    border: none;
    border-radius: 0 0 0.25rem 0.25rem;
    color: var(--white);
    font-weight: bold;
    font-size: 1.125rem;
    transition: filter 0.2s;
  
    &:hover {
      filter: brightness(0.8)
    }

  }
`;

export const PosterContainer = styled.div`
  height: 300px;
  overflow: hidden;
`