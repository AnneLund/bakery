import styled from 'styled-components'

const StyledForm = styled.form`
padding: 1em;

fieldset{
display: flex;
flex-direction: column;
position: relative;
color: white;
border-radius: 5px;
border-style: solid 3px black;
box-shadow: black 5px 5px 5px;
margin: 1em auto;
width: 30%;
padding: 1%;  

legend{
  font-size: 1.5em;
}
}

@media screen and (max-width: 600px){
fieldset{
width: 90%;
margin: auto;
}
}

div{
  padding: 0 2em;
  
    input{
    width: 80%;
    padding: 7px;
    font-size: 1.5em;
    border: white solid 2px;
    color: black;
    margin: 0.5em 0;
    }

    textarea{
      width: 80%;
      font-size: 1.5em;
      height: 10vh;
      padding: 7px;
      margin-top: 0.5em;
      color: black;
    }

  button{
    display: block;
    margin: 1em auto;
    padding: 0 .5em;
    border: white solid 1px;
    color: black;
    font-size: 1.5em;

    &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }
  }      



}
`
export {StyledForm}