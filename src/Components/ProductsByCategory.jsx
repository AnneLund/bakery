import React, { useState, useEffect } from 'react'
import AppService from './Appservices/Appservice'
import {Link, Route, Routes, useParams } from 'react-router-dom'
import {AiOutlineComment} from 'react-icons/ai'
import styled from 'styled-components'

const Products = styled.article`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
    margin: 1em auto;
    width: 50%;

    figure {
        margin: 1em auto;
        width: 300px;
        img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
        }

        .goods {
            border-radius: 0%;
        }

        .comments {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 10%;
            margin: auto;
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
width: 100%;
}
`

const ProductsByCategory = () => {
    const {id} = useParams()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
          
            try {
                const response = await AppService.GetList("categories/" + id)
                    if (response.data) {
                       
                    setCategories(response.data.item.products)
                    }
            } catch (error) {
                console.error(error)
            }
        }

        fetchCategories()
    }, [categories, id])


  return (

    <Products>
{categories && categories?.map((product, i) => {
    return(
      
        <figure key={i}>
            <img className='goods' src={product.image.fullpath} alt={product.title}/>
            <figcaption>
            <p className='comments'>{product.num_comments}<AiOutlineComment size={20}/></p>
            <h5>{product.title.substring(0, 30)}...</h5>
            <p>{product.teaser.substring(0, 80)}...</p>
            <Link to={'/products/' + product.id}>Se mere</Link>
          
            </figcaption>
        </figure>
     
    )
})}

    </Products>

    
 
  )
}

export default ProductsByCategory