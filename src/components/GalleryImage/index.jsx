export default function GalleryImage( { show } ){
    console.log(show)
    return (
        <div className = "gallery-image">
            <img src = { show.image.medium } />
        </div>
    )
}