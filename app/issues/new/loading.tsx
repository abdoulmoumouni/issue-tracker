import ErrorMessage from '@/app/components/ErrorMessage'
import { Box, Flex, Button, Spinner } from '@radix-ui/themes'
import React from 'react'
import { Controller } from 'react-hook-form'
import loading from '../loading'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const newIssueLoading = () => {
  return (
    <div className='max-w-xl p-5 space-y-3'>
        <Flex direction="column" gap="3" maxWidth="100%">
          <Skeleton />
          
          <Box maxWidth="100%">
            <Skeleton height="20rem"/>
          </Box>
        </Flex>
        <Skeleton width="5rem"/>
    </div>
  )
}

export default newIssueLoading