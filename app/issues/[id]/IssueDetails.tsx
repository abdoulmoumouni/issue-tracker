import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@/app/generated/prisma'
import { Heading, Flex, Card,Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issuesDetails} : {issuesDetails:Issue}) => {
  return (
    <>
        <Heading>{issuesDetails.title}</Heading>
        <Flex gap="3" my="2">
          <IssueStatusBadge status={issuesDetails.status} />
          <Text>{issuesDetails.createdAt.toLocaleDateString()}</Text>
        </Flex>
        <Card className="prose">
          <ReactMarkdown>{issuesDetails.description}</ReactMarkdown>
        </Card>
    </>
  )
}

export default IssueDetails