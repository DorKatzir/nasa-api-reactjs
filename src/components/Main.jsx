/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import ReactPlayer from 'react-player/youtube'

export default function Main({ data }) {
    
    return (


        <div className="imgContainer">

            {
                data?.media_type === 'image' && <img className='bgImage' src={ data?.hdurl } alt={ data.title || 'bg-image' } />
            }

            {
                data?.media_type === 'video' && <ReactPlayer url={ data?.url} playsinline={true} controls={false} light={true} muted={true} width='100%' height='100%'/>
            }
  
        </div>

    )
}
