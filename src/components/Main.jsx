/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import ReactPlayer from 'react-player'

export default function Main({ data }) {
    
    return (


        <div className="imgContainer">

            {
                data?.media_type === 'image' && <img className='bgImage' src={ data?.hdurl } alt={ data.title || 'bg-image' } />
            }

            {
                data?.media_type === 'video' && <ReactPlayer className='bgVideo' url={ data?.url} controls={true} />
            }
  
        </div>

    )
}
