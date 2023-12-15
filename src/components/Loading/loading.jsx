// Loading.js
import styled, { keyframes } from 'styled-components';

// Definindo a animação de rotação
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilizando o componente de loading
const LoadingContainer = styled.div`
  text-align: center;
`;

const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;


const Loading = () => (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
  
  export default Loading;