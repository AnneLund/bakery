import styled from 'styled-components'
import { useLoginStore } from './Login/useLoginStore'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Appservice from '../Components/Appservices/Appservice'
import Comments from '../Components/Comments/Comments'
import Transitions from '../Styles/Transition'
import {MdEdit} from 'react-icons/md'
import { useParams } from 'react-router-dom'

const Form_Styled = styled.form`
    display: flex;
    width: 100%;
    margin: 0 0 1em 0;
    justify-content: center;
    div {
        border: grey 1px solid;
        display: flex;
        flex-direction: row;
        width: 80%;
        textarea {
        font-size: 1em;
        border: none;
        width: 100%;
        height: 8vh;
        padding: 1.5em 0;
    }

    span {
        padding: 1.5em 1em 0;
    }
    }

    button {
    background-color: #3745619a;
    font-family: sans-serif;
    letter-spacing: .2em;
    color: white;
    font-size: 1em;
    margin-left: .5em;
    width: 25%;
    } 
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
      div {
        width: 100%;
      }
      button {
        width: 100%;
        margin: 0;
      }
    }
`

const Post = () => {

    const {loggedIn, userInfo} = useLoginStore()
    const [postID, setPostID] = useState()
    const [productID, setProductID] = useState(1)
    const {register, handleSubmit, reset, formState : {errors}} = useForm()
    const {id} = useParams()

    const onSubmit = async (data) => {
      
        const postData = {
            user_id : data.user_id,
            product_id: id,
            title: data.title,
            comment: data.comment,
            active: true
        }

        try {
            const response = await Appservice.Create('comments', postData)
            if(response.status) {
                console.log(response)
                setPostID(response.data.new_id)
                setProductID(response.data.new_ProductID)
                reset()
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <Transitions>
        {loggedIn ? (
            <>
    <Form_Styled onSubmit={handleSubmit(onSubmit)}> 

<input type="hidden" {...register('product_id')} value={productID}/>
<input type="hidden" {...register('user_id')} value={userInfo.user_id}/>

{errors.title?.type === "required" && <p role='alert'>Titlen er påkrævet</p>}
<input type='text' style={{'display': 'none'}} {...register('title')} placeholder="Dit navn"/>

<div><span><MdEdit size={20}/></span><textarea {...register('comment', {required: true})} id="comment" placeholder='Fortæl os hvad du synes...'/></div>

<button type="submit">Indsæt</button>
</Form_Styled>

  <Comments postID={postID} productID = {productID}/>
  
    </>) : null }
    
</Transitions>
  )
}

export default Post;