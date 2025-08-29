import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueEditButton = ({issueID} : {issueID : number}) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issueID}/edit`} className="ml-2">
        Edit Issue
      </Link>
    </Button>
  );
};

export default IssueEditButton;
