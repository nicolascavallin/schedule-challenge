import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import TopBar from './ui/TopBar'
import ScheduleGrid from './ui/ScheduleGrid'
import DatabaseContext from './context/Database'

interface Props {
    
}

const ScheduleScreen = (props: Props) => {

    const dbContext = useContext( DatabaseContext )

    return (
        <Box
            w='100vw'
            h='100vh'
        >

            <TopBar />

            <ScheduleGrid status={ dbContext.state.status } reservations={ dbContext.state.reservations } />

        </Box>
    )
}

export default ScheduleScreen
