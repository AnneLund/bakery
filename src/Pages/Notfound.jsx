import React, { useEffect, useState } from 'react'

const Notfound = ({switchValue}) => {
 console.log(switchValue)

const [errorSection, setErrorSection] = useState("")

useEffect(() => {
  switch(switchValue) {
    case "sci-fi":
      setErrorSection("Denne sci-fi genre blev ikke fundet..");
      break;

      case "booksindex":
        setErrorSection("Dette produkt blev ikke fundet")
        break;

      case "home":
        setErrorSection("Denne side blev ikke fundet")
        break;

      default:
        setErrorSection("Siden blev ikke fundet")
  }
}, [switchValue])

 
  return (
   <section>
    <article>
      <header>
        <h1>404</h1>
      </header>
      <p>{errorSection}</p>
    </article>
   </section>
  )
}

export default Notfound