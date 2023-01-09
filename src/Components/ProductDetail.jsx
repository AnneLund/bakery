import React, { useState, useEffect } from 'react'
import AppService from './Appservices/Appservice';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {FcLike} from 'react-icons/fc'
import Comments from './Comments/Comments';
import Post from '../Pages/Post';

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
`

const Product = styled.figure`
width: 50%;

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
top: 10vh;

li {
    list-style: none;
    border: #8080809c 1px solid;
    margin: .2em;
    padding: .5em 1.5em;
}

h3 {
    text-align: left;
    margin-bottom: 1em;
}
}
`

const ProductDetail = () => {
const {id} = useParams()
const [product, setProduct] = useState("")

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

console.log(product)

  return (
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

<Post/>
    </Product_Page>
  
  )
}

export default ProductDetail