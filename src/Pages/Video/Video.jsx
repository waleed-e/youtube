import React from 'react'
import './Video.css'
import PlayVideo from '../../Compnents/playVideo/PlayVideo'
import Recomeneded from '../../Compnents/Recomended/Recomeneded'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId, categoryId} = useParams()
  return (
    <div className='play-container'>
<PlayVideo vidoeId={videoId}/>
<Recomeneded/>
    </div>
  )
}

export default Video

