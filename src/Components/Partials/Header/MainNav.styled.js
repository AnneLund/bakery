import styled from "styled-components";
import headerimg from './headerimg.jpg'

export const MainNav = styled.ul`
background-image: url(${headerimg});
height: auto;
background-position: center;
background-repeat: no-repeat;
background-size: auto;
top: 0px;
display: flex;
gap: 10px;
z-index: 1;
flex-wrap: wrap;
justify-content: center;
padding: ${(props) => (props.shrinkHeader ? "0.2rem" : "1rem")} 4rem;
transition: padding 500ms ease;

li{
    list-style: none;
    &:last-of-type{
        margin-left: 0;
    }
}

@media (max-width: 768px){
    padding: 1rem;
    height: auto;
    display: flex;
    justify-content: flex-end;
    background-image: none;
    background-color: #15568490;

    li{
        width: 100%;
    }
}
`