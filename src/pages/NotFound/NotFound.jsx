
import styled from 'styled-components';

// Estilizando o componente NotFound
const NotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #dc3545;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
`;

export const NotFound = () => {
  return (
    <NotFoundStyles>
      <Title>404 - Página não encontrada</Title>
      <Description>A página que você está procurando não existe.</Description>
    </NotFoundStyles>
  );
};