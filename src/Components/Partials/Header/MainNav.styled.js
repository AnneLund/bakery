import styled from "styled-components";
import headerimg from './headerimg.jpg'

export const MainNav = styled.ul`
background-image: ${(props) => (props.showBackground ? `url(${headerimg})` : null)};
height: auto;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top: 0px;
display: flex;
gap: 10px;
z-index: 1;
flex-wrap: wrap;
width: 100%;
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
    h2 {
        display: none;
    }
    li{
        width: 100%;
        background-color: ${(props) => (!props.isOpen ? '#15568495' : null)};
    }


    
}
`