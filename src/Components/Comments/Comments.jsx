import React, { useEffect, useState } from 'react'
import AppService from '../Appservices/Appservice';
import styled from 'styled-components';
import { useLoginStore } from '../../Pages/Login/useLoginStore';

const Comments_Styled = styled.article`
width: 25%;
margin: .3em auto;
padding: .5em;
background-color: rgba(88, 151, 207, 0.224);

h4{
    margin: 1em 0;
}
    li {
        list-style: none;
        padding: .5em 0;
        width: 100%;
        text-align: left;
    }
`
const UserComment = styled.div`
    display: flex;
    button {
        width: 50%;
    }
`
const Comments = ({postID, productID}) => {
    const { userInfo} = useLoginStore();
    const [comments, setComments] = useState([])
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        const renderComments = async () => {
          
            try {
                const response = await AppService.GetDetail("comments", productID)
                    if (response.data) {
                    setComments(response.data.items)
                    }
            } catch (error) {
                console.error(error)
            }
        }

        renderComments()
    }, [postID, deleted, productID])

  return (
    <Comments_Styled>
        <h4>Alle kommentarer:</h4>
        <ul>
        {comments?.map((item) => {
            
            return(
                <UserComment key={item.id}>
                <li style={item.user_id.includes(userInfo.user_id) ? {color: 'red'} : null} key={item.id}>{item.title}</li>
                {item.user_id.includes(userInfo.user_id) ?  
            <> 
              <button value={item.id} onClick={() => {
                    AppService.Delete("comments", item.id)
                    setDeleted(() => !deleted)
                }}>Slet</button> 
                
                {/* <button value={item.id} onClick={() => {
                    AppService.Update("comments", item.id)
                    setDeleted(() => true)
                }}>Opdatér</button>  */}
            </> 
                : null}     
                </UserComment>
            )
        } )}
        </ul>
    </Comments_Styled>
  )
}

export default Comments;