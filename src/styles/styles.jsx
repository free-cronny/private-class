import styled from "styled-components";


export const Input = styled.input`
    border-radius: 15px;
    width: 24.875rem;
    height: 3.500rem;
    background: #102640;
    border: 3px solid transparent;
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
        padding-left: 15px;
    }
`;

export const Button = styled.button`
    height: 3.500rem;
    width: 24.875rem;
    border-radius: 15px;
    background: #102640;
    color: #fff;
    margin: 8px 0;
`;