import { Box, Stack } from "@mui/material"
import VideoCard from "./VideoCard"

function Videos({videos, channelDetail={}}) {
    return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
        {
            videos.map((item)=>(item.type === 'video' && <VideoCard key={item.title} video={{...item,...channelDetail}}/>))
        }
    </Stack>
  )
}

export default Videos