"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import { Spinner } from "@/app/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Callout, Flex, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { issueCreateSchema } from "../../validationSchema";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
type IssueForm = z.infer<typeof issueCreateSchema>;

const IssueCreatePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueCreateSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitIssue = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setLoading(false);
      setError("Something went wrong");
      console.error(error);
    }
  });

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>
            error occurred: {error} - Go back to{" "}
            <Link href="/issues" className="underline">
              issues list
            </Link>
          </Callout.Text>
        </Callout.Root>
      )}
      <form className="p-5 space-y-3" onSubmit={handleSubmitIssue}>
        <Flex direction="column" gap="3" maxWidth="100%">
          <TextField.Root
            color="green"
            variant="soft"
            placeholder="Title"
            {...register("title")}
          />

          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <Box maxWidth="100%">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE placeholder="Reply to comment…" {...field} />
              )}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </Box>
        </Flex>
        <Button disabled={loading} variant="solid">
          Submit new issue {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueCreatePage;
