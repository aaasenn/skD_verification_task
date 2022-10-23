import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: 'Open sans', sans-serif;
        box-sizing: border-box;
        
        font-size: 14px;
        font-weight: 400;
        color: '#353238'
    }

    html{
        position: relative;
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 150%;
    }
    
    & .app {
        max-width: 1440px;
        margin: 0 auto;

        @media screen and (max-width: 760px) {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
        }

        @media screen and (min-width: 761px){
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: center;
            gap: 60px;
        }
    }
`;
