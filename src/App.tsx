import React from 'react'
import { Router } from '@reach/router'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from './layout/layout'
import Certinfo from './pages/certinfo'
import 'twin.macro'

const Home = (props: any) => <div>Hello</div>

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Router>
          <Home path="/" />
          <Certinfo path="/certinfo" />
        </Router>
      </Layout>
    </ChakraProvider>
  )
}

export default App
