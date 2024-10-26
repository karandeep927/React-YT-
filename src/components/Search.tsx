import { Box, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/fetchapi"
import { useParams } from "react-router-dom"
import ListCard from "./ListCard"
import ChannelCard from "./ChannelCard"
import { HomeFeed } from "../utils/data"
import VideoCard from "./VideoCard"

function Search() {
    const [data,setData] = useState(HomeFeed.data)
    const {query} = useParams()

    useEffect(()=>{
        fetchDataFromApi(`search?query=${query}`)
        .then(data=>setData(data.data))
    },[query])
    console.log(data)
  return (
    <Stack direction={'row'} justifyContent={'start'} flexWrap={'wrap'} gap={2} p={3}>
        {
            data.map((item,index)=>( 
                <Box key={index}>
                    {item.type === 'video' && <VideoCard video={item}/>}
                    {item.type === 'channel' && <ChannelCard channelDetail={item}/>}
                </Box>

            ))
        }
    </Stack>
  )
}

export default Search