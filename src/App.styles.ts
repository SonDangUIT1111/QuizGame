import styled, {createGlobalStyle} from "styled-components";
import BGImage from './images/Edu_Background.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }


`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        background-image: linear-gradient(180deg, #fff, #fff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 400;
        filter: drop-shadow(2px 2px #4b4b4b);
        font-size: 2rem;
        margin: 0;
    }

    h1 {

        background-image: linear-gradient(180deg, #fff, #05c953);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 900;
        filter: drop-shadow(2px 2px #4b4b4b);
        font-size: 70px;
        text-align: center;
        margin: 10px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ff8800);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-weight: bold;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`