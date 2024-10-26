import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { fetchDataFromApi } from "../utils/fetchapi"
import { formatNumber } from "../utils/util_func"
import VideoCard from "./VideoCard"
import { demoProfilePicture } from "../utils/constant"

function VideoDetails() {
  const {id} = useParams()
  const [video,setVideo] = useState({})
  const [relatedVideos,setRelatedVideos] = useState([])
  const {title,channelId,channelTitle,subscriberCountText,viewCount,description,likeCount} = video

  useEffect(()=>{
    fetchDataFromApi(`video/info?id=${id}`)
    .then(data=>setVideo(data))
    fetchDataFromApi(`related?id=${id}`)
        .then(data=>setRelatedVideos(data.data))
  },[id,channelId])
  console.log(video,channelId)
  if(Object.keys(video).length === 0) return <div style={{fontSize:'48px',textAlign:'center',color:'white'}}>Loading...</div>
  
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontSize={{xs:20,md:25}}  fontWeight="bold" p={2} sx={{borderWidth:"1px",borderTop:'solid',borderColor:'white'}}>
              {title}
            </Typography>
            <Stack direction="column" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Box sx={{ p:2}}>
                <Link to={`/channel/${channelId}`} style={{display:'flex',alignItems:'center',gap:"25px"}}>
                <Box sx={{borderRadius:50,width:{xs:45,md:70}}}>
                <img src={ demoProfilePicture } alt="" width={'100%'} height={'100%'} style={{objectFit:'contain'}}/>
                </Box>
                <Typography variant='h6' color="#fff" >
                  {channelTitle}
                  <Typography color='gray' sx={{fontSize:15}}>
                          {subscriberCountText}
                  </Typography>
                </Typography>
                <Typography variant="body1" color="white" sx={{ opacity: 0.7,textAlign:"right" ,flex:1 }}>
                  {formatNumber(parseInt(likeCount))} likes
                </Typography>
              </Link>
              </Box>
              <Stack direction="row" gap="20px" alignItems="center" minHeight={'100px'}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {description}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} my={2}>
          {
            relatedVideos.map((video)=>(<VideoCard key={video.title} video={video}/>))
          }
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails