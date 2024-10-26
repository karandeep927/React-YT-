import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { demoProfilePicture } from "../utils/constant"
import { Link } from "react-router-dom"

function ChannelCard({channelDetail,mt=0}) {
    
    return (
    <Box width={408} height={298} sx={{display:'flex',justifyContent:'center', alignItems:'center',mt:2}}>
        <Link to={`/channel/${channelDetail?.channelId}`} style={{display:'flex',justifyContent:'center', alignItems:'center' ,gap:4}}>
        <CardMedia image={channelDetail?.thumbnail[channelDetail.thumbnail.length -1 ].url ||demoProfilePicture} sx={{ border:'1px solid white', borderRadius:50 ,width: 100,height: 100 }}/>
        <CardContent>
            <Typography variant="subtitle1" color="white" mb={1}>
                {channelDetail?.title}
              <CheckCircle sx={{ fontSize: 15 ,ml:1}} />
            </Typography>
            <Typography variant="body2" color="gray">
             {channelDetail?.subscribersCount} subscribers 
               </Typography>
            <Typography variant="body2" color="gray">
                {channelDetail?.description.slice(0,47).padEnd('.',50)}
            </Typography>

        </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard