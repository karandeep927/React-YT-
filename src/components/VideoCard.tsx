import { Link } from "react-router-dom";
import { Card, Typography, CardContent, CardMedia, Box } from "@mui/material";
import { formatNumber } from "../utils/util_func";

// interface Author {
//     avatar: Array<{
//         height: number;
//         url: string;
//         width: number;
//     }>;
//     badges:  Array<{
//         text:string;
//         type:string;
//     }>;
//     canonicalBaseUrl: string;
//     channelId: string;
//     title: string;
// }

// interface Thumbnail {
//     height: number;
//     url: string;
//     width: number;
// }

// interface Stats {
//     views: number;
// }

// interface Video {
//     author: Author;
//     badges: string[];
//     descriptionSnippet: string;
//     isLiveNow: boolean;
//     lengthSeconds: number;
//     movingThumbnails: Thumbnail[];
//     publishedTimeText: string;
//     stats: Stats;
//     thumbnails: Thumbnail[];
//     title: string;
//     videoId: string;
// }

// type video ={
//     video:Video
// }

function VideoCard({ video }) {
    const views = formatNumber(Number(video?.viewCount))
    const {channelId,videoId,title,channelThumbnail,thumbnail,publishedTimeText,channelTitle} = video
  
    return (
    <Card sx={{ width: { md: "320px", xs: "100%" }, boxShadow: "none",my:2 }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={thumbnail[thumbnail.length - 1].url}
          sx={{ width: "100%", height: 180 }}
        />
        <CardContent
          sx={{ backgroundColor: "#1e1e1e", height: "90px", p: "12px"}}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box
              overflow="hidden"
              sx={{ width: 40, height: 40,borderRadius:"50%" }}
            >
              <img
                style={{ width: "100%", height: "100%",objectFit:"contain" }}
                src={channelThumbnail[channelThumbnail.length - 1].url}
                alt="channel Logo"
              />
            </Box>
            <Typography variant="subtitle1" color="white" flex={1} overflow={'clip'} sx={{maxHeight:55,alignSelf:"start"}}>
              {title}
            </Typography>
          </Box>
          <Link to={`/channel/${channelId}`}>
            <Typography variant="body2" color="gray" ml={7}>
              {channelTitle}
            </Typography>
          </Link>
          <Typography variant="body2" color="gray" ml={7}>
            {views} views | {publishedTimeText}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
