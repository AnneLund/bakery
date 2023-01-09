import React, {useState} from 'react'
import styled from 'styled-components'
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import img1 from '../Assets/Images/slide1.jpg'
import img2 from '../Assets/Images/slide2.jpg'
import img3 from '../Assets/Images/slide3.jpg'


const MyMainHeader = styled.header`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .slide_container {
    position: relative;
    display: flex;

    h1 {
   font-size: 7vw;
   position: absolute;
   margin: 2em auto;
   width: 100%;
  } 
  }

  .slider_img {
    width: 100%;
  }
`

const Arrows = styled.div`
  display: flex;
  padding: 0 2em;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  right: 0;

  span{
    cursor: pointer;
  }
`

const Indicators = styled.div`
            position: absolute;
            bottom: 0;
            margin: 0.5em auto;
            width: 100%;             
`

const MainHeader = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const images = [
      img1,
      img2,
      img3,
    ];
  
    const previousImage = () => {
      const newImageIndex = currentImage - 1;
      setCurrentImage(newImageIndex < 0 ? images.length - 1 : newImageIndex);
    };
  
    const nextImage = () => {
      const newImageIndex = currentImage + 1;
      setCurrentImage(newImageIndex >= images.length ? 0 : newImageIndex);
    };
  
  return (
    <MyMainHeader>
    <div className='slide_container'>
    <h1>Vi elsker at lave brød</h1>
<Arrows>
<span><BiLeftArrowAlt color='white' onClick={previousImage} size={50}/></span>
<span><BiRightArrowAlt color='white' onClick={nextImage} size={50}/></span> 
</Arrows>

      <img className='slider_img' src={images[currentImage]} alt="Slider Image" />

    </div>
    <Indicators>
    {images.map((image, index) => (
          <div
            key={image}
            style={{
              width: 20,
              height: 20,
              backgroundColor: index === currentImage ? '#0000009c' : '#ffffff80',
              borderRadius: '50%',
              display: 'inline-block',
              marginLeft: 10,
            }}
          />
        ))}
        </Indicators>
        </MyMainHeader>
  )
}

export default MainHeader