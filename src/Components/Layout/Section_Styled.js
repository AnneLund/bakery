import styled from "styled-components";

const Section_Styled = styled.section`
position: relative;
width: 80%;
min-height: 50vh;
margin: auto;
display: flex;
justify-content: center;


.figures{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 8em;
    margin: 3em 0;
 

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
gap: 2em;
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
    }

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
min-height: 60vh;
justify-content: flex-start;


}
`

export default Section_Styled;

