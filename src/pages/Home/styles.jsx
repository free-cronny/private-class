import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const BurgerIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const WelcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
  width: 300px;
  height: 300px;
  background: #161688;
  border:solid 1px #161688; /* Cor de fundo do card */
  color: #fff; /* Cor de texto */
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px 5px;

  img {
    width: 80px;
    border-radius: 100%;
    border: 5px solid #161688;
  }
`;

export const WelcomeTitle = styled.h1`
display: flex;
align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PhotosAvatar = styled.div`
  display: flex;

`

export const WelcomeMessage = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;