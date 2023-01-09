import React, {useState} from 'react'
import Transitions from '../Styles/Transition'
import LatestNews from '../Components/LatestNews'
import Newsletter from '../Components/Newsletter'
import MainHeader from '../Components/MainHeader'
import BakedGoods from '../Components/BakedGoods'


const Home = () => {
 
  return (
    <Transitions>
          <MainHeader/>
          <LatestNews/>
          <Newsletter/>
          <BakedGoods/>
    </Transitions>
  )
}

export default Home;