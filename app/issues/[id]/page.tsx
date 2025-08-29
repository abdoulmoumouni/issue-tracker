import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const issuesDetails = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issuesDetails) notFound();
  return (
    <div>
      <Heading>{issuesDetails.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issuesDetails.status} />
        <Text>{issuesDetails.createdAt.toLocaleDateString()}</Text>
      </Flex>
      <Card className="prose">
        <ReactMarkdown>{issuesDetails.description}</ReactMarkdown>
        </Card>
    </div>
  );
};

export default IssueDetailsPage;
