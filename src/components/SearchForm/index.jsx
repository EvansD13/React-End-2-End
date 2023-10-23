import { useState, useEffect } from "react"
import { ShowCard } from "../../components"

export default function SearchForm( ){
    const [input, setInputValue] = useState("")
    const [searchString, SetSearchString] = useState("")
    const [showData, setShowData] = useState([{ image: {}, rating: {}}])
    const [rating, updateRating] = useState(false)
    function organise(){
        console.log("Click!")
        updateRating(!rating)
    
      }   


    function handleInput(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        SetSearchString(input)
        setInputValue("")
    }

    async function searchAPI(){
        try{
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
            const data = await response.json()
            //Currently returns "score" and "show". We only want "show"

            const showData = data.map(s => s.show)
            if ( rating == true ) {    let ratings = showData.map(s => s.rating.average)
                let idy = showData.map(s => s.id)

                let idx = []
                let idn = []

                let subRating = []
                let count = 0

                for (let i = 0; i < ratings.length; i++ ){
                    if ( ratings[i] != null ){
                        subRating.push(ratings[i])
                        idx.push(idy[i])
                    }else{
                        count ++
                        idn.push(idy[i])
                    }
                }
                subRating.sort((a,b) => a - b); subRating.reverse()
                for (let i = 0; i < count; i++){
                    subRating.push(null)
                    idx.push(idn[i])
                }
                console.log(subRating)

            }

            //i


            
            console.log(showData.map(s => s.rating.average))



            setShowData(showData)

        }catch(err){
            console.log({error: err.message})
        }
    }
    
    useEffect(() => {
        searchAPI()
    }, [ searchString, rating ])

    return (
        <>
            <form onSubmit= { handleSubmit }>
                <input type="text" required onChange = { handleInput } value = { input }/>
                <input type="submit" value="Search" />
            </form>
            Sort by Rating: <input type = "checkbox" onClick = { organise } />
            <div>
                { showData.map(show => show.image ? <ShowCard show = {show} key = {show.id}/> : "") }
            </div>
        </>
      );
}

//https://api.tvmaze.com/search/shows?q=girls