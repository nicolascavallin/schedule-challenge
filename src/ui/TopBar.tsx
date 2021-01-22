import React, { useContext } from 'react'
import { Box, Button, Heading, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import AuthContext from '../context/Auth'

interface Props {
    
}

const TopBar = (props: Props) => {

    const authContext = useContext( AuthContext )

    const user = authContext.state.user?.displayName as string
    const email = authContext.state.user?.email as string

    const onSignOut = () => authContext.actions.signOut()

    return (
        <Box
            w='100vw'
            py={ 2 }
            px={ 4 }
            d='flex'
            flexDirection='row'
            borderBottomWidth={ 1 }
            justifyContent='space-between'
            alignItems='center'
        >
            <Heading isTruncated size='md'>Schedule Challenge</Heading>
            <Menu>
                <MenuButton as={ Button } rightIcon={ <ChevronDownIcon /> }>
                    { user.split(' ')[0] }
                </MenuButton>
                <MenuList>
                    <MenuItem isDisabled>{ user }</MenuItem>
                    <MenuItem isDisabled>{ email }</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={ onSignOut }>Cerrar sesión</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default TopBar
