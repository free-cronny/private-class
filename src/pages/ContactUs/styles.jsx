import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    
    height: 100%;
    width: 100%;
`

export const ContainerWaMessage = styled.div`
    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    width: 100%;
    
    @media (max-width: 768px) {
        margin-top: 5%;
      }

`

export const InputsWa = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const InputMessage = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media (max-width: 768px) {
        width: 80%;
        height: 100%;
      }
`

export const ContainerDif = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 39rem;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

     @media (max-width: 768px) {
        width: 80%;
        height: 100%;
      }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 80%;
        height: 100%;
      }
`