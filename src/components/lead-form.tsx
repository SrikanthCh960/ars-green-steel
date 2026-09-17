import { QuoteRequestForm } from "@/components/quote-request-form";

type LeadFormProps = {
  title?: string;
  body?: string;
  intent?: "quote" | "contact" | "dealer";
  submission?: "quote";
};

export function LeadForm({
  title = "Share your requirement",
  body = "Tell us what you are building and where. The ARS team will help route your enquiry to the right product and next step.",
}: LeadFormProps) {
  return <QuoteRequestForm title={title} body={body} />;
}
