import styled from 'styled-components'
import { useLoginStore } from './Login/useLoginStore'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Appservice from '../Components/Appservices/Appservice'
import Comments from '../Components/Comments/Comments'
import Transitions from '../Styles/Transition'
import Products from './Categories'

const PostPage = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #ff00007c;
`

const Form_Styled = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    textarea {
        width: 100%;
    }
    input {
        padding: 0.5em 2em;
        margin-left: 1em;
    }
`

const Post = () => {

    const {loggedIn, userInfo} = useLoginStore()
    const [postID, setPostID] = useState()
    const [productID, setProductID] = useState(1)
    
    const {register, handleSubmit, reset, formState : {errors}} = useForm()

    const onSubmit = async (data) => {
      
        const postData = {
            user_id : data.user_id,
            product_id: data.product_id,
            title: data.title,
            comment: data.comment,
            active: true
        }

        try {
            const response = await Appservice.Create('comments', postData)
            if(response.status) {
                setPostID(response.data.new_id)
                reset()
            }
        } catch (error) {
            console.error(error)
        }
    }
console.log(productID)
  return (
    <Transitions>
    <PostPage>
        {loggedIn ? (
            <>
                <legend>Kommenter</legend> 
    <Form_Styled onSubmit={handleSubmit(onSubmit)}> 
{/* <Products productID = {productID} setProductID = {setProductID}/> */}
<input type='text' style={{'display': 'none'}} {...register('product_id')} value={productID}/>

<input type='text' style={{'display': 'none'}} {...register('user_id')} value={userInfo.user_id}/>

{errors.title?.type === "required" && <p role='alert'>Titlen er påkrævet</p>}
<input type='text' style={{'display': 'none'}} {...register('title', {required: true})} placeholder="Navn"/>

<textarea {...register('comment', {required: true})} id="comment" placeholder='Din kommentar'/>

<input type="submit" value="Send"/>
</Form_Styled>

  <Comments postID={postID} productID = {productID}/>
  
    </>) : null }
    
</PostPage>
</Transitions>
  )
}

export default Post;