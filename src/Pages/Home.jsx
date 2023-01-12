import React from 'react'
import Transitions from '../Styles/Transition'
import LatestNews from '../Components/Partials/LatestNews'
import Newsletter from '../Components/Partials/Newsletter'
import MainHeader from '../Components/Partials/MainHeader'
import BakedGoods from '../Components/Partials/BakedGoods'


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