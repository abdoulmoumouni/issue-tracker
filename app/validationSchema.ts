import { z } from "zod";

export const issueCreateSchema = z.object({
    title: z.string().min(1, "title is required").max(225),
    description: z.string().min(3, "Description is required").max(1024),
});
