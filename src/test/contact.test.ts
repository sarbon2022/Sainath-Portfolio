import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact";

const valid = {
  name: "Priya Sharma",
  email: "priya@company.com",
  subject: ".NET Developer role",
  message: "Hi Sainath, we'd like to discuss a Full-Stack .NET opening with you.",
};

describe("contact form validation", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a message shorter than 20 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Hello there" }).success).toBe(false);
  });

  it("rejects a blank name", () => {
    expect(contactSchema.safeParse({ ...valid, name: "   " }).success).toBe(false);
  });
});

describe("buildMailto", () => {
  it("addresses the email to Sainath with subject and sender details", () => {
    const url = buildMailto("sainathbohare2000@gmail.com", valid);
    expect(url.startsWith("mailto:sainathbohare2000@gmail.com?subject=.NET%20Developer%20role")).toBe(true);
    expect(decodeURIComponent(url)).toContain("priya@company.com");
  });
});
