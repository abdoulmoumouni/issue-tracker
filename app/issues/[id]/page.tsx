import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  const issuesDetails = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issuesDetails) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issuesDetails={issuesDetails} />
      </Box>
      <Box>
        <IssueEditButton issueID={issuesDetails.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
