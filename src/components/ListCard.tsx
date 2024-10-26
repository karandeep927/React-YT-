import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/util_func";
import { Block } from "@mui/icons-material";

function ListCard({ video }) {
  const {
    title,
    videoId,
    channelTitle,
    channelId,
    viewCount,
    publishedTimeText,
    thumbnail,
    channelThumbnail,
  } = video;
  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: { md: "380px", xs: "100%" },
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          my: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "320px", md: "190px" },
            height: { xs: "130px", md: "129px" },
            overflow: "hidden",
          }}
        >
          <img
            src={thumbnail[thumbnail.length - 1].url}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "100px",
            p: "5px",
            pb: "9px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              color="white"
              flex={1}
              height={55}
              overflow={"hidden"}
              mb={2}
            >
              {title}
            </Typography>
            <Box
              overflow="hidden"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "contain",
                display: { xs: "block", md: "none" },
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={channelThumbnail[channelThumbnail.length - 1].url}
                alt="Channel Logo"
              />
            </Box>
          </Box>
          <Link to={`/channel/${channelId}`} style={{ textDecoration: "none" }}>
            <Typography variant="body2" color="gray" ml={1}>
              {channelTitle}
            </Typography>
          </Link>
          <Typography variant="body2" color="gray" ml={1}>
            {formatNumber(parseInt(viewCount))} views | {publishedTimeText}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ListCard;
