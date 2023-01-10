import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import Transitions from '../../Styles/Transition'
import { Form_Styled } from '../Login/Login'
import { Header } from '../../Styles/HeaderStyle';

const Contact_Page = styled.section`
article {
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin: auto;
  padding: 3em;

}

form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 2em;
    input, textarea {
      padding: .5em;
      margin: .5em 0;
    }

    button {
      width: 50%;
      margin-left: auto;
      background-color: #3745619a;
      padding: 0.5em;
    font-family: sans-serif;
    letter-spacing: .2em;
    color: white;
     
    }
  }
.mapouter{
  position:relative;
  text-align: left;
  height:250px;
  width:50%;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
}


@media screen and (max-width: 768px) {
    article {
    flex-direction: column;  
    width: 90%;
    padding: 2em 0;
    }
    form {
      width: 100%;
    }
    .mapouter {
      width: 100%;
      margin: 3em 0;
    }
  }
`

const Contact = () => {
  const { setFlashMessage } = useFlashMessageStore();

  const sendEmail = (e) => {
    e.preventDefault();
    setFlashMessage("Tak for din besked! Vi vender hurtigst muligt tilbage.");
    e.target.reset();
  };

  return (
    <Transitions>
    <Contact_Page>
      <Header>
      <h2>Kontakt os</h2> 
      <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit tenetur provident harum at corrupti minus? Maiores pariatur tempore autem!</h4>  
      </Header>
 <article> 
  <form onSubmit={sendEmail}>

<input type="text" placeholder='Dit navn:' id="first" name="user_name" required />

<input type="email" placeholder='Din email:' id="email" name="user_email" required />

<textarea rows={10} name="message" placeholder='Din besked:' required/>

<button type="submit" id="submit" name="submit"value="Send">Send</button>

</form>

<div className="mapouter">
  <p>Adresse: Øster Uttrup Vej 1</p>
  <p>Telefon: 25269540</p>
  <div className="gmap_canvas">
    <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=%C3%98ster%20Uttrup%20Vej%201&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
    <a href="https://putlocker-is.org"></a>
    <br/><a href="https://www.embedgooglemap.net"></a>
  </div>
</div>

</article> 
    </Contact_Page>
    </Transitions>
  )
}

export default Contact;
