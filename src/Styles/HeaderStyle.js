import styled from "styled-components";

export const Header = styled.header`
        width: 100%;
        margin: 0 auto;
        color: black; 
        padding: 0;

        h2 {
            margin-bottom: .4em;
            font-size: 2.5em;
        }

    h4{
        font-size: 1em;
        padding: 0 1em;
        font-weight: 100;
        width: 50%;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
    width: 100%;

    h2 {
        margin: .5em 0;
        padding: 0;
        font-size: 8vw;
    }

    h4 {
        margin: .5em 0;
        width: 100%;
    }
    }
    `