import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const BurgerIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const WelcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #161688; /* Cor de fundo do card */
  color: #fff; /* Cor de texto */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const WelcomeTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const WelcomeMessage = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;