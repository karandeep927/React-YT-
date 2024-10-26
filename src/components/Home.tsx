import {Box,Stack,Typography} from '@mui/material'
import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchDataFromApi } from '../utils/fetchapi'

import { HomeFeed } from '../utils/data'

function Home() {
    const [selectedCategory,setSelectedCategory] = useState('New');
    const [videos,setVideos] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    
    useEffect(()=>{
        setError(false)
        setLoading(true)
        fetchDataFromApi(`search?query=${selectedCategory}`)
        .then((data)=>{
            setVideos(data.data);
            setLoading(false);
        })
        .catch((err)=>{
                setError(true);
                setLoading(false);
        })
    },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { xs: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
            {
                loading && <Typography variant='h4' style={{color:"white",textAlign:'center'}}>Loading....</Typography>
            }
            {
                error && <Typography variant='h4' style={{color:'white',textAlign:'center'}}>Error occured</Typography>
            }
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
export default Home