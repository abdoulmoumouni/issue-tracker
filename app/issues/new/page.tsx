"use client";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import { TextField, Flex, Button, Box, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import { issueCreateSchema } from "../../validationSchema";
import { z } from "zod";

type IssueForm = z.infer<typeof issueCreateSchema>;

const IssueCreatePage = () => {
  const { register, control, handleSubmit, formState : { errors} } = useForm<IssueForm>({
    resolver: zodResolver(issueCreateSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("")
  
  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>
            error occurred: {error} - Go back to{" "}
            <Link href="/issues" className="underline">issues list</Link>
          </Callout.Text>
        </Callout.Root>
      )}
      <form
        className="p-5 space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("Something went wrong");
            console.error(error);
          }
        })}
      >
        <Flex direction="column" gap="3" maxWidth="100%">
          <TextField.Root
            color="green"
            variant="soft"
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && (
            <Text as="p" className="text-red-600">{errors.title.message}</Text>
          )}
          <Box maxWidth="100%">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE placeholder="Reply to comment…" {...field} />
              )}
            />
            {errors.description && errors.description.message && (
            <Text as="p" className="text-red-600">{errors.description.message}</Text>
          )}
          </Box>
        </Flex>
        <Button variant="solid">Submit new issue</Button>
      </form>
    </div>
  );
};

export default IssueCreatePage;
