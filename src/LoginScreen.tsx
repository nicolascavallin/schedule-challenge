import React from 'react'
import { Box, Button, Heading, Spinner } from '@chakra-ui/react'
import firebase from './utils/firebase'

interface Props {
    signIn: () => Promise<firebase.auth.UserCredential>
    status: string
}

const LoginScreen = ({ signIn, status }: Props) => {

    const onLogin = () => signIn()

    return (
        <Box 
            w='100vw' 
            h='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
        >
            
            <Heading my={ 4 } size='lg'>Schedule Challenge</Heading>

            { ( status === 'init' ) && <Spinner my={ 4 } /> }

            { ( status === 'restored' ) && <Button my={ 4 } onClick={ onLogin }>Iniciar sesión con Google</Button> }

        </Box>
    )
}

export default LoginScreen
