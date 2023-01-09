import React, { useState, useEffect } from 'react'
import AppService from './Appservices/Appservice'
import Section_Styled from './Layout/Section_Styled'

const LatestNews = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
          
            try {
                const response = await AppService.GetList("news")
                    if (response.data) {
                      
                    setNews(response.data.items.slice(0, 3))
                    }
            } catch (error) {
                console.error(error)
            }
        }

        fetchNews()
    }, [])

  return (
    <Section_Styled>
        <article>
        <header>
   <h2>Vi skaber lækkert brød!</h2> 
   <h4>Iste sint consequatur ipsa, impedit iure nisi fugit veritatis facilis ullam! Reprehenderit quos ipsum blanditiis deleniti error vero rerum, consequatur cupiditate aut?</h4>        
        </header>

    <div className='figures'>
    {news?.map((item, i) => (
       <figure key={i}>
        <img src={item.image}/>
        <figcaption>
            <h5>{item.title}</h5>
            <p>{item.teaser.substring(0, 80)}...</p>
        </figcaption>
       </figure>
     ))}

    </div>

    </article>
    </Section_Styled>
  )
}

export default LatestNews