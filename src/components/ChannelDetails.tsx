import { Box, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchDataFromApi } from "../utils/fetchapi"
import { formatNumber } from "../utils/util_func"
import Videos from "./Videos"
// import { channelDetail } from "../utils/data"

function ChannelDetails() {
    const {id} = useParams()
    const [channelDetails,setChannelDetails] = useState({})
    
    const {title,channelId,channelHandle,description,subscriberCount,videosCount,banner,avatar,videos} = channelDetails
   
    useEffect(()=>{
        fetchDataFromApi(`channel/videos?id=${id}`)
        .then(data=>setChannelDetails({videos:data.data,...data.meta}))
    },[id])

    if(Object.keys(channelDetails).length === 0) return <div style={{fontSize:'48px',textAlign:'center',color:'white'}}>Loading...</div>
    return (
    <Stack>
        <Box sx={{width:'100vw',height:{xs:'120px',md:'180px'}}}>
            <img src={banner[banner.length-1].url} alt="" style={{objectFit:'cover'}} width={"100%"} height={'100%'}/>
        </Box>
            <Box sx={{display:"flex",justifyContent:{xs:'center',md:'start'},alignItems:'center',my:3,gap:2}}>
            <CardMedia image={avatar[avatar.length-1].url} sx={{ border:'1px solid white', borderRadius:100 ,minWidth:{xs:60,md:150},height:{xs:60,md:150}, m:2}}/>
            <CardContent>
            <Typography color="white" mb={1} sx={{fontSize:{xs:20,md:35}}}>
                {title}
            </Typography>
            <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}}>
            <Typography color="gray" sx={{fontSize:{xs:12,md:15}}}>
                {channelHandle}
            </Typography>
            <Typography color="gray" sx={{fontSize:{xs:12,md:15}}}>
            {formatNumber(Number(subscriberCount))} subscribers . 
            </Typography>
            <Typography color="gray" sx={{fontSize:{xs:12,md:15}}}>
                {videosCount} videos
            </Typography>
            </Box>
            <Typography sx={{fontSize:{xs:12,md:15},cursor:'pointer'}} color="gray" >
                {description.slice(0,47).padEnd(50,'...')} more
            </Typography>
             </CardContent>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', width:'100vw'}}>
                <Videos videos={videos}  channelDetail={{channelThumbnail:avatar,channelTitle:title,channelId}} />
            </Box>
    </Stack>
  )
}

export default ChannelDetails