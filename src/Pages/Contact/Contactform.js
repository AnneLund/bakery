import React from 'react';
import {StyledForm} from './ContactForm.Styled';
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";

const Contact = () => {

  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));


  const sendEmail = (e) => {
    e.preventDefault();
  
   
    setFlashMessage("Tak for din besked! Jeg vender hurtigst muligt tilbage.");
   
  

    e.target.reset();
  };



  return (
    <StyledForm onSubmit={sendEmail}>

      <fieldset>

        <legend>Dine informationer</legend>

        <div className='inputs'>
 
      <input type="text" placeholder='Navn:' id="first" name="user_name" required />

      <input type="email" placeholder='Email:' id="email" name="user_email" required />

      <textarea name="message" placeholder='Besked:' required/>

      <button type="submit" id="submit" name="submit"value="Send">Send</button>
      
      </div>

      </fieldset>
      
    </StyledForm>
  );
};

export default Contact;