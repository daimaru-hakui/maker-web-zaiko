import { Spinner } from '@chakra-ui/react'
import React from 'react'


export default function loading() {
  return (
    <div className='w-full flex justify-center items-center min-h-[calc(100vh-200px)]'><Spinner/></div>
  )
}
