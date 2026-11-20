import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a short subject").max(150, "Subject must be under 150 characters"),
  message: z
    .string()
    .trim()
    .min(20, "Message should be at least 20 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactValues = z.infer<typeof contactSchema>;

/** Builds a mailto: link that opens the visitor's email app with the message pre-filled. */
export function buildMailto(to: string, v: ContactValues) {
  const body = `${v.message}\n\n— ${v.name}\n${v.email}`;
  return `mailto:${to}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
}
