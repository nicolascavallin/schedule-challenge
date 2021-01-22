import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { AuthProvider } from './context/Auth'
import { DatabaseProvider } from './context/Database'
import ScheduleScreen from './ScheduleScreen'

interface Props {
  
}

const App = (props: Props) => {

  console.log('Hey people!')

  return (
    <ChakraProvider>
      <AuthProvider>
        <DatabaseProvider>
          <ScheduleScreen />
        </DatabaseProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
