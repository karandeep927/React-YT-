import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'



function SearchBar() {
    const [searchQuery,setSearchQuery] = useState("")
    const navigate = useNavigate()
    const handleClick = (e)=>{
        e.preventDefault()
        navigate(`/search/${searchQuery}`)
    }
  return (
    <Paper component={'form'} onSubmit={()=>{}} sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:2,boxShadow:'none',mr:{sm:5}}}>
        <input type="text" className='search-bar' placeholder='search..'  value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
        <IconButton type='submit' sx={{p:'10px',color:'red'}} onClick={handleClick}>
            <Search/>
        </IconButton>
    </Paper>
  )
}
export default SearchBar