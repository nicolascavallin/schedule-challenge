import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'
import ScheduleElement from './ScheduleElement'

interface Props {
    status: string
    reservations: any[]
}

const ScheduleGrid = ({ status, reservations }: Props) => {

    return (
        <Box w='100%' d='flex' flexDirection='column' alignItems='center' >

            { ( status === 'init' ) && <Spinner my={ 4 } /> }

            { ( status === 'restored' ) && reservations.map( x => <ScheduleElement key={ x[ 'id' ] } data={ x } /> ) }
            
        </Box>
    )
}

export default ScheduleGrid
