import React from 'react'
import useGetListItemsByEndPoint from '../../Components/Hooks/useGetListItemsByEndPoint';
import { Outlet, Link} from 'react-router-dom'
import styled from 'styled-components'
import Transitions from '../../Styles/Transition';
import Breadcrumbs from '../../Components/Router/BreadCrumbs/Breadcrumbs';

const Page = styled.section`
width: 80%;
min-height: 80vh;
margin: 3em auto 0 auto;
display: flex;
flex-direction: column;
padding-top: 8em;
article {
  header {
    margin: 2em auto 0;
    h2 {
      margin-bottom: .4em;
    font-size: 2.5em;    
    }
  
    h4 {
        width: 50%;
        margin: 0 auto;
        font-weight: 100;
    }
}   
}  

@media screen and (max-width: 768px) {
  margin: 0 auto; 
  padding: 4em 0 0;
  min-height: auto;
  article {
    header {
      h4 {
        width: 100%;
      }  
    }  
  }
}
`

const Sidebar = styled.nav`
text-align: right;
width: 15%;
padding: 2em;
position: absolute;
ul {
    line-height: 1.8em;
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
  padding: 2em 0;
  position: relative;
  ul {
 position: relative;   
  }
}
`
const Products = () => {
const {state: categories} = useGetListItemsByEndPoint('categories', "items");

  return (
    <Transitions>
<Page>
  <article>
  <header>
      <h2> Vores elskede bagværk</h2>
      <h4>Iste sint consequatur ipsa, impedit iure nisi fugit veritatis facilis ullam! Reprehenderit quos ipsum blanditiis deleniti error vero rerum, consequatur cupiditate aut?</h4>
  </header>
 
    <Breadcrumbs/> 
        <Sidebar>
         <ul>
        
        {categories?.map(cat => {
          return(
            <li key={cat.id}>
              <Link to={cat.id}>{cat.title}</Link>
            </li>
          )
        })}
       
          </ul>
        </Sidebar>    
<Outlet/>
</article>
</Page>
</Transitions>
  )
}

export default Products