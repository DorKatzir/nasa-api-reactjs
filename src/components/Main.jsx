/* eslint-disable react/prop-types */
export default function Main({ data }) {
    
    console.log(data.media_type)
    const mediaType = data.media_type

    // const vidControls = '?controls=0&autoplay=0&mute=1'

    return (

            mediaType == 'image' 
            ?
            <div className="imgContainer">
                <img className="bgImage" src={ data?.hdurl } alt={ data.title || 'bg-image' } />
            </div>
            :
            <iframe width="100%"
                // src={`https://www.youtube.com/watch?v=vAdTL6t_YP4${vidControls}`}>
                src={`${data?.url}?controls=0&autoplay=0&mute=1`}>
            </iframe>

        
    )
}
