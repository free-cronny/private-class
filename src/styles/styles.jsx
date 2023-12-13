import styled from "styled-components";


export const Input = styled.input`
    border-radius: 10px;
    width: 24.875rem;
    height: 3.500rem;
    background: #102640;
    border: 3px solid transparent;
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
        color: #A8A8A8;
        padding-left: 15px;
    }
`;

export const Button = styled.button`
    padding: 1em 3em;
    border-radius: 10px;
    background: ${(props) => props.backgroundColor || "#102640"}; /* Usar a prop backgroundColor ou o valor padrão */
    color: rgba(255, 255, 255, 1);
    border: none;
    margin: 8px 0;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;