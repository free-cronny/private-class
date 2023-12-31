import styled from "styled-components";

export const ContainerMain = styled.div`

    background-color: #fff;
    color: #000;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 14.833rem;
    height: 5.082rem;
    padding: 15px;
    text-align: center;
    margin: 10px;
    align-items: center;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: transform 0.3s; // Adicionando uma transição suave

    hr {
        width: 90%;
        border-bottom: 1px solid #161688;
        
    }

    img {
        width: 50px;
        height: 50px;
    }

    &:hover {
        cursor: pointer;
    transform: scale(1.05); // Faz o card crescer um pouco ao passar o mouse
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 90%;
    height:  7.082rem;
    margin-top: 30px;
  }


`

export const ContainerTexts = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-family: Syncopate;
    font-weight: bold;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    

`