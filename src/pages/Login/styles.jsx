import styled from "styled-components"

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
        margin: 15px;
    }

    h1 {        
        font-family: Syncopate;
        margin-bottom: 10%;
    }
`