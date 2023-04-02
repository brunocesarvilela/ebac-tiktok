import React, {useRef} from 'react'
import './Video.css'

function Video() {
  return (
    <div className='video'>
        <video
            className='video__player'
            
            loop
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4'
        >

        </video>
    </div>
  )
}

export default Video