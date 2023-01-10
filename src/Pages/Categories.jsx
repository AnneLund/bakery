import React, {useState} from 'react'
import useGetListItemsByEndPoint from '../Components/Hooks/useGetListItemsByEndPoint';
import Section_Styled from '../Components/Layout/Section_Styled';
import { Outlet, Link} from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../Styles/HeaderStyle';
import Transitions from '../Styles/Transition';

const Sidebar = styled.nav`
text-align: right;
width: 15%;
padding: 2em;
ul {
    line-height: 1.8em;
    position: absolute;
li {
    list-style: none;
    a {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
    }
}    
}

@media screen and (max-width: 768px) {
  margin: auto;
  text-align: center;
  width: 100%;
  ul {
 position: relative;   
  }
}

`
const Products = () => {
const {state: categories} = useGetListItemsByEndPoint('categories', "items");

  return (
    <Transitions>
<Section_Styled>
  <article>
  <Header>
      <h2> Vores elskede bagværk</h2>
      <h4>Iste sint consequatur ipsa, impedit iure nisi fugit veritatis facilis ullam! Reprehenderit quos ipsum blanditiis deleniti error vero rerum, consequatur cupiditate aut?</h4>
  </Header>

        <Sidebar>
          <ul>
        {categories?.map(cat => {
          return(
            <li>
              <Link to={cat.id}>{cat.title}</Link>
            </li>
          )
        })}
          </ul>
        </Sidebar>    
<Outlet/>
</article>
</Section_Styled>
</Transitions>
  )
}

export default Products