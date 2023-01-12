import { useState } from "react";
import { useLoginStore } from "./useLoginStore";
import useFlashMessageStore from '../../Components/FlashMessages/useFlashMessageStore'
import styled from "styled-components";
import Transitions from "../../Styles/Transition";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Styles/HeaderStyle";
import { Page } from "../Contact/Contact";

export const Form_Styled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  gap: .5em;
  input, button, textarea {
    width: 60%;
    margin: 0 auto;
  }
`

const Login = () => {
  const { setLoggedIn, loggedIn } = useLoginStore();
  const { setFlashMessage } = useFlashMessageStore();
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };



  const LogMeIn = (e) => {
    e.preventDefault();

    const endPoint = "https://api.mediehuset.net/token";
    const username = user.username;
    const password = user.password;
    const data = { username, password };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Ok") {
          setFlashMessage("Velkommen");
          data.user.user_id = data.user_id
          setLoggedIn(true, data.user, data.username, data.access_token);
        } else {
          setFlashMessage("Ingen brugere med disse kriterier");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !loggedIn ? (
    <Transitions>
    <Page>

  <Header>
    <h2>Log ind</h2>
  </Header>
       
    <Form_Styled onSubmit={LogMeIn}>
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" onChange={(e) => handleChange(e)} />
      <button>Log ind</button>
    </Form_Styled>  

    </Page>
    </Transitions>
  ) : 
   
  navigate('/')
};

export default Login;
