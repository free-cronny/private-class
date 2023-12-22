import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  padding-top: 20px;
`;

export const SidebarHeader = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarMenuItem = styled.li`
  padding: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  overflow-x: hidden;
`;

export const DevelopmentCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  background: #706E64;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 100%; /* Subtraindo a largura da barra lateral */
  
`;

// Estilizando o texto dentro do card
export const CardText = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const ContainerCards = styled.div`

    display: flex;
    flex-wrap:wrap;
    max-height: 110%;
    overflow: auto;
    width: 100%;
    margin-top: 5%;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 12px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
      background-color: #555; /* Cor do indicador da barra de rolagem */
      border-radius: 15px;
  }

  &::-webkit-scrollbar-track {
      background-color: #f5f5f5; /* Cor do fundo da barra de rolagem */
  }

  &::-webkit-scrollbar-corner {
      background-color: transparent; /* Cor do canto da barra de rolagem (canto inferior direito) */
  }

  &:hover {
      &::-webkit-scrollbar-thumb {
          background-color: #FFC200; /* Cor do indicador da barra de rolagem ao passar o mouse */
      }
  }

`

export const BurgerIcon = styled.img`
  width: 30px;
  height: 30px;
`