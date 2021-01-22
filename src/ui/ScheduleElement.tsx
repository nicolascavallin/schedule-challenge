import { Box, Text, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import AuthContext from '../context/Auth'
import DatabaseContext from '../context/Database'

interface Props {
    data: { title: string, reservedBy: string[], id: string }
}

const ScheduleElement = ({ data }: Props) => {

    const available = 8 - data.reservedBy.length
    const userId = useContext( AuthContext ).state.user?.uid as string
    const actions = useContext( DatabaseContext ).actions

    const toast = useToast()

    const onTryReserve = () => {

        if( data.reservedBy.includes( userId ) ){

            // cancelar reserva
            actions.onCancelReservation( data.id, userId )

        } else {

            // realizar reserva

            if( available === 0 ){

                // no hay disponibilidad
                toast({
                    description: 'No es posible reservar porque no hay motociclistas disponibles.',
                    status: 'info',
                    position: 'top-right'
                })

            } else { actions.onMakeReservation( data.id, userId ) }

        }

    }

    return (
        <Box
            p={ 2 } 
            m={ 2 }
            borderWidth={ 1 }
            w='md'
            borderRadius='md'
            bg={ ( data.reservedBy.includes( userId ) ) ? 'green.200' : ( available === 0 ) ? 'red.200' : 'white' }
            _hover={{
                background: ( data.reservedBy.includes( userId ) ) ? 'green.300' : ( available === 0 ) ? 'red.300' : 'gray.100',
                cursor: 'pointer'
            }}
            d='flex'
            flexDirection='row'
            onClick={ onTryReserve }
        >

            <Text fontWeight={ 500 } mr={ 2 }>{ data.title }</Text>
            {
                ( data.reservedBy.includes( userId ) ) && <Box>
                    <Text>
                        Reservado por tí.
                    </Text>
                </Box>
            }
            {
                ( !(data.reservedBy.includes( userId )) ) && <Box>
                    { ( available > 0 ) && <Text>
                        { ( available > 1 ) ? `${ available } motociclistas disponibles.` : 'Un motociclista disponible.' }
                    </Text> }
                    { ( available === 0 ) && <Text>
                        No hay motociclistas disponibles.
                    </Text> }
                </Box>
            }

        </Box>
    )
}

export default ScheduleElement
