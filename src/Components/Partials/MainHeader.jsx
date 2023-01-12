import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../Assets/Images/slide1.jpg'
import img2 from '../../Assets/Images/slide2.jpg'
import img3 from '../../Assets/Images/slide3.jpg'


const MyMainHeader = styled.header`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .h_container {
    position: absolute;
    z-index: 5; 
    width: 100%;
    display: flex;
  
  h1 {
    font-size: 6em;
    width: 100%;
  }
  }

  img {
    width: 100%;
  }

  .react-slideshow-container {
   button {
    background-color: inherit;
    margin: 1em;
    svg {
     fill: #ffffff6c;  
    }
   
  }   
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
    <div className='h_container'>
      <h1>Vi elsker at lave brød</h1>  
    </div>
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