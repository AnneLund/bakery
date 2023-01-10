import React from 'react'
import styled from 'styled-components'

const Footer_Styled = styled.footer`
background-color: #3e3e3e;
color: white;
h2 {
  font-size: 2vw;
  margin-bottom: 0;
  padding: .3em;
}
p{
  font-weight: 100;
  font-size: .7em;
  width: 30%;
  color: #e7e7e7d0;
  margin: 0 auto;
  line-height: 1.6em;
  margin-bottom: 2em;
}

div {
background-color: #202020;
padding: .5em;
.copyright {
  margin: 1em auto;
}
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 6vw;
  }
  p {
    font-size: 2vw;
    width: 90%;
  }
}
`

const Footer = () => {
  return (
    <Footer_Styled>
      <h2>bageriet</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nesciunt asperiores velit accusantium natus. Quis alias reiciendis eum dolor hic!</p>
    <div>
      <p className='copyright'>Copyright© 2017 bageriet aps</p>
    </div>
    
    </Footer_Styled>
  )
}

export default Footer