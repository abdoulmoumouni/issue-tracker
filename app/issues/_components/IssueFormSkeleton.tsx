import { Flex, Box } from '@radix-ui/themes'
import React from 'react'
import { Skeleton } from '@/app/components'

const IssueFormSkeleton = () => {
  return (
    <div className='max-w-xl p-5 space-y-3'>
        <Flex direction="column" gap="3" maxWidth="100%">
          <Skeleton height="2rem" />
          <Box maxWidth="100%">
            <Skeleton height="20rem"/>
          </Box>
        </Flex>
        <Skeleton width="5rem"/>
    </div>
    
  )
}

export default IssueFormSkeleton