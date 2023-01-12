import React, { useState } from 'react'
import styled from 'styled-components'
import Transitions from '../../Styles/Transition'
import { Header } from '../../Styles/HeaderStyle';
import { useModalStore } from "../../Components/Modal/useModalStore";

export const Page = styled.section`
width: 80%;
min-height: 80vh;
margin: 3em auto 0 auto;
display: flex;
flex-direction: column;
padding-top: 8em;

article {
width: 80%;
margin: 3em auto;
display: flex;
justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    input, textarea {
      width: 100%;
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
  padding-top: 5em;
 
    article {
    flex-direction: column;  
    width: 90%;
    padding: 0;
    }
    form {
      width: 100%;
      button {
        margin: 0 auto;
      }
    }
    .mapouter {
      width: 100%;
      margin: 3em 0;
    }
  }
`

const Contact = () => {
  const { setModalPayload, setToggleModal } = useModalStore();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setModalPayload(
    <div>
      <h4>Tak for din besked:</h4>
      <p>{user.message}</p>
      <h5>Vi vender hurtigst muligt tilbage!</h5>
      <button onClick={() => setToggleModal("none")}>Ok</button>
    </div>
    )
    e.target.reset();
  };

  return (
    <Transitions>
    <Page>
      <Header>
      <h2>Kontakt os</h2> 
      <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit tenetur provident harum at corrupti minus? Maiores pariatur tempore autem!</h4>  
      </Header>
  <article> 
  <form onSubmit={sendEmail}>
<input type="text" placeholder='Dit navn:' onChange={(e) => handleChange(e)} name="name" required />
<input type="email" placeholder='Din email:' onChange={(e) => handleChange(e)} name="email" required />
<textarea rows={10} name="message" onChange={(e) => handleChange(e)} placeholder='Din besked:' required/>
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
</Page>
</Transitions>
  )
}

export default Contact;
