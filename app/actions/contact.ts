"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { z } from "zod"

// Define validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Initialize Supabase client
    const supabase = createServerSupabaseClient()

    // Insert data into the contact_submissions table
    const { data, error } = await supabase.from("contact_submissions").insert([validatedData]).select()

    if (error) {
      console.error("Error submitting contact form:", error)
      return {
        success: false,
        message: "Failed to submit your message. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
      data,
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      const fieldErrors = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return {
        success: false,
        message: `Validation error: ${fieldErrors}`,
      }
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
