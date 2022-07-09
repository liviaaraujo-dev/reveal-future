import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: black;
        color: white;
        text-align: center;
        font-family: sans-serif;
    }
`

export const Container = styled.div`
    margin-top: 100px;
    width: 80%;
    max-width: 400px;
    margin-inline: auto;
`

export const Title = styled.h1`
    margin-top: 40px;
    margin-bottom: 10px;
    opacity: 0.9;
`

export const Paragrafo = styled.p`
    margin-bottom: 40px;
    opacity: 0.7;
`
export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
`

export const Button = styled.button`
    display: block;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    border-radius: 4px;
    border: none;
    background-color: blueviolet;
    color: white;
    transition: filter .2s;
`

export const Resposta = styled.h3`
    margin-top: 30px;
    transition: opacity 1s;

    div{
        font-size: 16px;
        font-weight: normal;
        opacity: 0.9;
        margin-bottom: 10px;
    }
`
