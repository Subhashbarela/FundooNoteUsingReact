import React,{useState} from 'react'
import { Box } from '@mui/material';
import Navdrawer from '../NavDrawer/Navdrawer'
import HeaderBar from '../Header/HeaderBar';
import TakeNotes from '../Notes/TakeNotes'

export default function Dashboard(){
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [noteOption, setNoteOption] = useState("Notes")

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    const listenToDrawer = (options) => {
        setNoteOption(options)
    }
    return(
        <Box style={{ display: 'flex', width: '100%' }}>      
             
              <HeaderBar listenToHeader={listenToHeader}></HeaderBar>
              <Navdrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}></Navdrawer>   
              <div>
              <TakeNotes></TakeNotes>
              </div>
    </Box>
    )
}