import React, {useState} from 'react'
import newsletterbg from '../../Assets/Images/newsletterbg.jpg'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import AppService from '../Appservices/Appservice'
import {AiOutlineMail} from 'react-icons/ai'
import useFlashMessageStore from '../FlashMessages/useFlashMessageStore'

const Subscribe = styled.section`
    background-image: url(${newsletterbg});
    color: white;
    padding: 5em 0;
    margin: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
      
header {
    width: 70%;
    margin: 1em auto;
    line-height: 2em;
    h2{
        margin: 0;
    }
}

        form {
            width: 70%;
            display: flex;
            margin: auto;
            input{
                border: none;
                padding: 1em;
                width: 100%;
            }
            button {
                background-color: #678699;
                border: none;
                padding: 1em;
                color: white;
                text-transform: uppercase;
                cursor: pointer;

                &:hover {
                    background-color: #7ea6bf;
                    transition: ease-in-out 300ms;
                }
            }

            span {
               background-color: #a5b6c1;
                display: flex;
                align-items: center;
                padding: 0.7em;
            }
        }

        @media screen and (max-width: 768px) {
            padding: 2em 0;
            margin: 0;
        }
    
`

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const {register, handleSubmit, reset, formState : {errors}} = useForm()
    const { setFlashMessage } = useFlashMessageStore();

    const onSubmit = async (data) => {

        const postData = {
            email : data.email,
        }

        try {
            const response = await AppService.Create('newsletter', postData)
            if(response.status) {
                setEmail(response.data.new_id)
                reset()
            }
            if (response.data.error === 'Mail exists!') {
                setFlashMessage('Du er allerede tilmeldt!')
                return;
            }
            if (response.data.status === 'Ok') {
                setFlashMessage('Tak for din tilmelding!')
            }
        } catch (error) {
            console.error(errors)
        }
    }
  return (
    <Subscribe>
       <header>
          <h2>Tilmeld dig vores nyhedsbrev</h2> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </header>
     
        <form onSubmit={handleSubmit(onSubmit)}>
    <span><AiOutlineMail size={20}/></span> <input placeholder='Indtast din email' type='email' {...register('email')}/>
      <button type="submit">Tilmeld</button>
    </form>     
       
    </Subscribe>
  )
}

export default Newsletter