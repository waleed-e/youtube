import React, { useEffect } from 'react'
import './playVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'


const PlayVideo = ({videoId}) => {
    const [apiData,setApiData] = useState(null)
    const fetchVideoData = async () =>{
        // Fetching Vidoes Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
    }
useEffect(() =>{
    fetchVideoData();
},[])


  return (
    <div className='play-video'>
         {/* <video src={video1} controls autoPlay muted></video> */}
         <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
         <div className="play-video-info">
            <p>1525 Views &bull; 2days ago</p>
      
         <div>
         <span><img src={like} alt="" />125</span>
         <span><img src={dislike} alt="" />2</span>
         <span><img src={share} alt="" />Share</span>
         <span><img src={save} alt="" />Save</span>
         </div>
         </div>
    <hr /> 
<div className="publisher">
    <img src={jack} alt="" />
    <div>
        <p>Waleed Elshafey</p>
        <span>100M Subscirbers</span>
    </div>
    <button>Subscribe</button>
</div>
<div className="vid-description">
    <p>Channel that makes learning Easy</p>
    <p>Subscibe Waleed To Watch More Vidoes.</p>
    <hr />
    <h4>130 Comments</h4>
    <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Waleed Elshafey <span>1 Week Ago.</span></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum porro aut incidunt! Earum nesciunt omnis officiis sed, commodi iste consequuntur.</p>
        <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
        </div>
        </div>
    </div>
    <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Waleed Elshafey <span>1 Week Ago.</span></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum porro aut incidunt! Earum nesciunt omnis officiis sed, commodi iste consequuntur.</p>
        <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default PlayVideo