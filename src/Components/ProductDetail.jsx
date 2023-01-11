import React, { useState, useEffect } from 'react'
import AppService from './Appservices/Appservice';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {FcLike} from 'react-icons/fc'
import Post from '../Pages/Post';
import {AiOutlineComment} from 'react-icons/ai'
import { useLoginStore } from "../Pages/Login/useLoginStore";
import Transitions from '../Styles/Transition';

const Product_Page = styled.section`
position: relative;
padding: 2em;
width: 65%;
min-height: 60vh;
margin: auto;
header {
    text-align: left;
    display: flex;
    justify-content: space-between;
    margin: 1em 0;

   h1{
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 1.5em;
        margin: 0;
    }
}

button {
    padding: .5em 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        padding: 0 .5em;
    }
}

@media screen and (max-width: 768px) {
    width: 100%;
    margin: 1em auto;
    padding: 0; 

    header {
        display: flex;
        flex-direction: column;
    }

    h1{
    padding: 1em;
    text-align: center;
    }
}
`

const Product = styled.figure`
width: 70%;
padding: 0 1em;

figcaption {
    line-height: 2.5em;
    text-align: start;
}

img {
    width: 50%;
    margin: 1em 2em 0 0;
    float: left;
}

ul {
position: absolute;
right: 0;
top: 15vh;

li {
    list-style: none;
    border: #8080809c 1px solid;
    margin: .2em;
    padding: 1em 2em;
}

h3 {
    text-align: left;
    margin-bottom: 1em;
}

}
@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        margin-bottom: 1em;
    }

    ul {
    position: static;
    margin: 1em auto 0;    
    } 
}
`

const Comments = styled.article`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    
    header{
        border: grey 1px solid;
        padding: 1em;
        color: black;
        margin-bottom: 1em;
    }

    p {
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        margin: 0;
        header {
        display: flex;
        flex-direction: column;  
        justify-content: center;
        align-items: center;

        h4 {
            margin: 0;
        }
        p {
            text-align: center;
        }
        }
       
    }
`

const ProductDetail = () => {
const {id} = useParams()
const [product, setProduct] = useState("")
const { loggedIn} = useLoginStore();

useEffect(() => {
    const fetchProduct = async () => {
      
        try {
            const response = await AppService.GetList("products/" + id)
                if (response.data) {
                setProduct(response.data.item)
                }
        } catch (error) {
            console.error(error)
        }
    }

    fetchProduct()
}, [])

  return (
    <Transitions>
    <Product_Page>
{product ? 

<>
<header>
<h1>{product.title}</h1> 
<button>Like! <span><FcLike size={15}/></span></button>           
</header>

<Product>
<img src={product.image.fullpath} alt={product.title}/>
<figcaption>
<p>{product.description}</p>  
</figcaption>

<ul>
   <h3>Ingredienser</h3> 
   {product.ingredients.map((ing, i) => (
    <li key={i}>{ing.amount} {ing.unit_name} {ing.ingredient_title}</li>
   ))}
</ul>

</Product> 
</>
: null}

<Comments>
        <header>
           <h4>Kommentarer</h4>  

   {loggedIn ?         
   <span> {product.num_comments} <AiOutlineComment/></span> : 
   <p><Link to="/login">Log ind</Link> for at se og skrive kommentarer til produktet..</p> }     
        </header>
<Post/>
</Comments>
    </Product_Page>
    </Transitions>
  )
}

export default ProductDetail