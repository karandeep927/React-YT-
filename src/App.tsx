import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './components/Home'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import Search from './components/Search'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/video/:id' element={<VideoDetails />}/>
      <Route path='/channel/:id' element={<ChannelDetails />}/>
      <Route path='/search/:query' element={<Search/>}/>
    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
