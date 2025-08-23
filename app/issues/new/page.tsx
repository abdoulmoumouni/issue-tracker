import { TextField, Flex, Button, Box, TextArea } from "@radix-ui/themes";
import React from "react";

const IssueCreatePage = () => {
  return (
    <div className="max-w-xl p-5 space-y-3">
      <Flex direction="column" gap="3" maxWidth="100%">
        <TextField.Root color="green" variant="soft" placeholder="Title"  />
        <Box maxWidth="100%">
		<TextArea size="3" placeholder="Reply to comment…"  rows={5} variant="soft" />
	</Box>
      </Flex>
        <Button variant="solid">Submit new issue</Button>
    </div>
  );
};

export default IssueCreatePage;
