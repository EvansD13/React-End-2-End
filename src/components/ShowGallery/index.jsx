/* We're taking three steps here:
        1. Retrieve the show data from the API (await fetch request)
        2. Once we've retrieved show data, we want to store them in a state
        3. Now we can map through the shows and render a card/div for each show in the array
 */

import GalleryImage from "../GalleryImage"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ShowGallery(){
    const [shows, setShows] = useState([])


    async function getShows(){
        try{
            const response = await fetch("https://api.tvmaze.com/shows")
            const data = await response.json()
            console.log(data)
            setShows(data)
        }catch(err){
            console.log({error: err.message})
        }
    }

    useEffect(() => {
        getShows()}, [])

    return <div className = "shows">
        { shows.map(show => <Link to = {`${show.id}`} key =  { show.id }>
                <GalleryImage show = { show } />
            </Link>) }
    </div>
}