import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShowCard } from "../../components"
// useParams - dynamic parameters of the route

export default function ShowPage() {
    const { id } = useParams({})
    const [show, setShow] = useState( { image: {}, rating: {} } )

    useEffect(() => {
      async function displayShow(){
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        console.log(data.name)
        setShow(data)
      }
      displayShow()
    }, [])
    
    return (
      <>
        <ShowCard show = { show }/>
      </>
    )
  }
  