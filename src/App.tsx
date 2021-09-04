import React from 'react'
import { Router } from '@reach/router'
import { ChakraProvider, Container, useColorModeValue } from '@chakra-ui/react'

import Layout from './layout'
import Certinfo from './pages/certinfo'

const Home = (props: any) => <div>Hello</div>

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Container bg={useColorModeValue('white', 'gray.900')}>
          <Router>
            <Home path="/" />
            <Certinfo path="/certinfo" />
          </Router>
        </Container>
      </Layout>
    </ChakraProvider>
  )
}

export default App
