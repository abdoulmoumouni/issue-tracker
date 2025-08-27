import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

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
      <p>{issuesDetails.title}</p>
      <p>{issuesDetails.description}</p>
      <p>
        <IssueStatusBadge status={issuesDetails.status} />
      </p>
    </div>
  );
};

export default IssueDetailsPage;
