import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #EAEAEA;
    display: flex;
    justify-content: space-between;
    text-align: center;

    

    img {
        height: 99%;
    }
`

export const ContainerLeft = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    input {
        margin: 10px;
        
    }

    h1 {        
        font-family: Syncopate;
        margin-bottom: 10%;
    }

    a{
        width: 9rem;  
        margin-left: 10rem;
        font-size: 0.9rem;
        text-decoration: none;
        color: #1468CB;

    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;

        input {
            margin: 10px 0;
        }
      }

`
export const ButtonsLog = styled.div`
    height: 17vh;
    display: flex; 
    justify-content: space-between;
    flex-direction: column;
    
`
export const ContainerLogin = styled.div`
    
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 3rem;
    border-radius: 12%;
    background: white;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }

`

export const ContainerRight = styled.div`
@media (max-width: 768px) {
    img {
      display: none;
    }
  }
`


