"use client"
import { useForm, Controller } from "react-hook-form"
import React from "react";
import { TextField, Flex, Button, Box, TextArea } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const IssueCreatePage = () => {
  const {register,control,handleSubmit} = useForm<IssueForm>();
  const router = useRouter()
  return (
    <form className="max-w-xl p-5 space-y-3" onSubmit={handleSubmit(async (data)=>{
      await axios.post("/api/issues",data)
      router.push("/issues")
    } 
    )}>
      <Flex direction="column" gap="3" maxWidth="100%">
        <TextField.Root color="green" variant="soft" placeholder="Title" {...register("title")}  />
        <Box maxWidth="100%">
          <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Reply to comment…" {...field}/>}
          />
		
	</Box>
      </Flex>
        <Button variant="solid">Submit new issue</Button>
    </form>
  );
};

export default IssueCreatePage;
