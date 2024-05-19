/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
export default function Main({ data }) {
    
    return (

        <div className="imgContainer">

            {
                data.media_type === 'image' 
                ?  <img className='bgImage' src={ data?.hdurl } alt={ data.title || 'bg-image' } />

                // :  <video  width='100%' height='100%' controls autoPlay={true} muted playsInline >
                //     <source src={data?.url} type='video/mp4'/>
                // </video>
                : <video controls>
                    {/* <source src={ data?.url } type="video/webm" /> */}
                    <source src={ data?.url } />
                    <p>
                        Your browser does not support HTML video. Here is a
                        <a href={ data?.url }>link to the video</a> instead.
                    </p>
                </video>

            }
            
        </div>

    )
}
