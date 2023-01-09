import React, {useState, useEffect} from 'react'
import Section_Styled from './Layout/Section_Styled'
import AppService from './Appservices/Appservice'

const BakedGoods = () => {
const [goods, setGoods] = useState([])

useEffect(() => {
    const fetchGoods = async () => {
      
        try {
            const response = await AppService.GetList("products")
                if (response.data) {
                setGoods(response.data.items.slice(0, 8))
                }
        } catch (error) {
            console.error(error)
        }
    }

    fetchGoods()
}, [])

  return (
    <Section_Styled>
        <article>
        <header>
            <h2> Nyeste bagværk</h2>
            <h4>Iste sint consequatur ipsa, impedit iure nisi fugit veritatis facilis ullam! Reprehenderit quos ipsum blanditiis deleniti error vero rerum, consequatur cupiditate aut?</h4>
        </header>
        <div className='figures'>
    {goods?.map((item, i) => (
       <figure key={i}>
        <img className='goods' src={item.image.fullpath}/>
        <figcaption>
            <h5>{item.title.substring(0, 30)}...</h5>
            <p>{item.teaser.substring(0, 80)}...</p>
            <button>Se mere</button>
        </figcaption>
       </figure>
     ))}

    </div>
    </article>
    </Section_Styled>
  )
}

export default BakedGoods