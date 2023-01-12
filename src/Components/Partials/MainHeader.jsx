import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../Assets/Images/slide1.jpg'
import img2 from '../../Assets/Images/slide2.jpg'
import img3 from '../../Assets/Images/slide3.jpg'


const MyMainHeader = styled.header`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  h1 {
    position: absolute;
    font-size: 6vw;
    width: 100%;
    margin: auto;
    top: 40%;
    z-index: 2;
  }
 
  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 7vw;
    }
  }
`

const MainHeader = () => {
  
    const images = [
      img1,
      img2,
      img3,
    ];
  
  return (
    <MyMainHeader>
      <h1>Vi elsker at lave brød</h1>
        <div className="slide-container">
        <Slide>
         {images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
                <img src={slideImage}/>
            </div>
          ))} 
        </Slide>
      </div>
    </MyMainHeader>
  )
}

export default MainHeader