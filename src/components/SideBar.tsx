import {Stack} from '@mui/material'
import {categories} from '../utils/constant'
import React from 'react'

type SideBarProps = {
    selectedCategory:string,
    setSelectedCategory:React.Dispatch<React.SetStateAction<string>>
}

function SideBar({selectedCategory,setSelectedCategory}:SideBarProps) {
    return (
    <Stack 
    
    sx={{overflow:'auto',height:{xs:'auto',md:'95%'},flexDirection:{xs:'row',md:'column'}}}>
    {
    categories.map((item)=>(
        <button className='category-btn'
        style={{backgroundColor:item.name === selectedCategory ? "#FC1503":'',color:'white'}}
        key={item.name}
        onClick={()=>setSelectedCategory(item.name)}
        >
            <span style={{color:selectedCategory === item.name ? 'white':'red',marginRight:'15px',}}>{<item.icon/>}</span>
            <span style={{opacity:item.name === selectedCategory ?1:0.5}}> {item.name}</span>
        </button>
    ))
    }
    </Stack>
  )
}

export default SideBar