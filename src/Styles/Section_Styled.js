import styled from "styled-components";

const Section_Styled = styled.section`
position: relative;
width: 80%;
min-height: 70vh;
margin: 3em auto 0 auto;
display: flex;
justify-content: center;

.figures{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 8em;
    margin: 3em 0 0 0;
 

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
padding: 0;
margin: 2em 0;
gap: 2em;
justify-content: center;
}   

}

    figure {
        margin: 1em auto;
        width: 300px;
        img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
        }

        .goods, .products {
            border-radius: 0%;
        }

        .products {
        width: 200px ;
        height: 200px;
        }

        h5 {
            font-size: 0.8em;
            margin: 1em;
            text-transform: uppercase;
        }

        p{
            font-size: 0.8em;
            line-height: 2em;
        }

        button {
            padding: .5em 2em;
            margin: 1em;
            text-transform: uppercase;
            background-color: inherit;
            border: 1px black solid;
        }

        @media screen and (max-width: 768px) {
            width: auto;
        }
    }

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
min-height: 70vh;

}
`

export default Section_Styled;

