import React, { useState, useEffect } from 'react'
import AppService from '../../Components/Appservices/Appservice';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {FcLike} from 'react-icons/fc'
import Post from '../../Components/Partials/Post';
import {AiOutlineComment} from 'react-icons/ai'
import { useLoginStore } from "../Login/useLoginStore";
import Transitions from '../../Styles/Transition';

const Product_Page = styled.section`
width: 80%;
min-height: 80vh;
margin: 3em auto 0 auto;
display: flex;
flex-direction: column;
padding-top: 8em;
header {
    text-align: left;
    display: flex;
    justify-content: space-between;
    margin: 1em 0;

   h1{
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 1.5em;
        margin: 0 .7em;
    }
}

div {
    display: flex;
    justify-content: space-between;
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

ul {
    width: 50%;

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
    margin: 1em auto;
    padding: 0; 

    header {
        display: flex;
        flex-direction: column;
        margin: 5em auto 0;

        h1 {
            padding: 0;
            margin: 0;
        }
        
        button {
            margin: .5em auto;
            width: 50%;
        }
    }

    h1{
    padding: 1em;
    text-align: center;
    }

div {
  display: flex;
  flex-direction: column;

  img {
    margin: 0;
    padding: 0;
  }
    }

    ul {
    margin: 1em auto 0; 
    width: 80% ;
    } 
}
`

const Product = styled.figure`
padding: 0 1em;
margin: 0 4em 0 0 ;
display: flex;
width: 70%;

p {
    line-height: 2.4em;
    text-align: left;
}

img {
   width: 50%;
   margin: 0 0.8em 0.1em 0;
   padding-top: 1em;
    float: left;
}

@media screen and (max-width: 768px) {
    width: 80%;
    margin: 1em auto;
    display: flex;
    flex-direction: column;
    padding: 0;

    img {
        width: 100%;
        margin: 0;
    } 
}
`

const Comments = styled.article`
    margin: 5em auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    
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
        margin: 0 auto;
        header {
        display: flex;
        flex-direction: column;  
        justify-content: center;
     

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

<div>
<Product>
<p><img src={product.image.fullpath} alt={product.title}/>{product.description}</p>  
</Product> 
<ul>
   <h3>Ingredienser</h3> 
   {product.ingredients.map((ing, i) => (
    <li key={i}>{ing.amount} {ing.unit_name} {ing.ingredient_title}</li>
   ))}
</ul>
</div>
</>
: null}
</Product_Page>

<Comments>
        <header>
           <h4>Kommentarer</h4>  

   {loggedIn ?         
   <span> {product.num_comments} <AiOutlineComment/></span> : 
   <p><Link to="/login">Log ind</Link> for at se og skrive kommentarer til produktet..</p> }     
        </header>
<Post/>
</Comments>

    </Transitions>
  )
}

export default ProductDetail