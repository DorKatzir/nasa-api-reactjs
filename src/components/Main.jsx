/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import ReactPlayer from 'react-player/youtube'

export default function Main({ data }) {
    
    return (
        <>
        
            {
                data?.media_type === 'image' &&

                    <div className="imgContainer">
                        <img className='bgImage' src={ data?.hdurl } alt={ data.title || 'bg-image' } />
                    </div>
            }
        
        
            {
                data?.media_type === 'video' && 
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={ data?.url }
                            width='100%'
                            height='100%'
                            playsinline={true}
                        />
                    </div>
            }
        
        </>



        

    )

}
