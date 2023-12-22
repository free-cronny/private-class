import styled from "styled-components";


export const Input = styled.input`
    border-radius: 10px;
    width: 20rem;
    height: ${(props) => props.height || '3.25rem'};
    background: #161688 ;
    border: 3px solid transparent;
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    &::placeholder {
        color: #A8A8A8;
        padding-left: 15px;
    }


    transition: ${(props) => props.Transition || 'height 0.0s'};

     @media (max-width: 768px) {
        width: 100%;
     }
`;

export const Button = styled.button`
    padding: ${(props) => props.PaddingButton || '0.5rem 1.5rem'};
    border-radius: 12px;
    background: ${(props) => props.BackgroundColor || "#102640"}; /* Usar a prop backgroundColor ou o valor padrão */
    color: rgba(255, 255, 255, 1);
    border: none;
    margin: ${(props) => props.MarginButton || '8px 0'};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  
    
    &:hover{
       background: ${(props) => props.BackgroundHover || '#090A63'}
    }

    cursor: pointer;
`;


export const Select = styled.select`
  border-radius: 10px;
  width: 20rem;
  height: 3.25rem;
  background: #161688;
  
  border: 3px solid transparent;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &::placeholder {
    color: #a8a8a8;
    padding-left: 15px;
  }


  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
border-radius: 10px;
width: 25rem;
height: ${(props) => props.height || '8.25rem'};
background: #161688 ;
border: 3px solid transparent;
box-sizing: border-box;
font-size: 1rem;
line-height: 1.5;
color: white;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
&::placeholder {
    color: #A8A8A8;
    padding-left: 15px;
}

transition: ${(props) => props.Transition || 'height 0.0s'};

 @media (max-width: 768px) {
    width: 100%;
 }
`