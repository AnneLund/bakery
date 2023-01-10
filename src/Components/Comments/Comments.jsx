import React, { useEffect, useState } from 'react'
import AppService from '../Appservices/Appservice';
import styled from 'styled-components';
import { useLoginStore } from '../../Pages/Login/useLoginStore';
import { useParams } from 'react-router-dom';
import profile from '../../Assets/Images/placeholderpic.png'

const Comments_Styled = styled.div`
width: 100%;
margin: .3em auto;

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
export const UserComment = styled.figure`
    display: flex;
    border: grey 1px solid;
    padding: 1em;
    color: black;
    text-align: left;
    margin-bottom: 1em;
figcaption {
    padding: 0 1em;
h4{
        margin: 0;
    }

    .created {
        font-size: .7em;
        margin-bottom: 1.5em;
    }

    p {
        font-weight: 100;
    }
}
   
    button {
        width: 50%;
    }

    img {
        width: 10%;
    }
`
const Comments = ({postID, productID}) => {
    const { userInfo} = useLoginStore();
    const [comments, setComments] = useState([])
    const [deleted, setDeleted] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const renderComments = async () => {
          
            try {
                const response = await AppService.GetDetail("comments", id)
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

        <ul>
        {comments?.map((item) => {
             const timestamp = item.created;
             const date = new Date(timestamp * 1000);
           
            return(
                <UserComment key={item.id}>
                <img src={profile} alt={item.user.firstname}/>    
                <figcaption key={item.id}>
                <h4>{item.user.firstname}</h4>
                <p className='created'>{date.toDateString()}</p>
                <p>{item.comment}</p>
                
                </figcaption>
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