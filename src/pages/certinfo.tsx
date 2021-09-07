import React, { useState } from 'react'
import { Text, Textarea, Code, Box } from '@chakra-ui/react'
import * as pki from '../pki'

export default function Certinfo(props: any) {
  let [value, setValue] = React.useState('')
  let [output, setOutput] = React.useState('')

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
    let str = pki.certificateToString(value) ?? pki.certificateRequestToString(value)
    if (str == null) {
      str = 'Invalid input'
    }
    setOutput(str)
  }

  return (
    <>
      <Text mb="8px">Cert or CSR: </Text>
      <Textarea value={value} onChange={handleInputChange} placeholder="Here is a sample placeholder" size="sm" />

      <Box mb="120px">
        output:
        <pre>
          <code>{output}</code>
        </pre>
      </Box>
    </>
  )
}
