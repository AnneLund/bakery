import styled from "styled-components";

export const Header = styled.header`
        width: 50%;
        margin:auto;
        color: black; 
        padding: 5em 0;

        h2 {
            margin: 1em auto;
            font-size: 2.5em;
        }

    h4{
        font-size: 1em;
        padding: 0 1em;
        font-weight: 100;
    }

    @media screen and (max-width: 768px) {
    width: 100%;

    h2 {
        padding: 0;
    }
    }
    `