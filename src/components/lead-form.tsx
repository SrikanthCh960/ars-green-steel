import { QuoteRequestForm, type QuoteRequestPrefill } from "@/components/quote-request-form";

type LeadFormProps = {
  title?: string;
  body?: string;
  intent?: "quote" | "contact" | "dealer";
  submission?: "quote";
  prefill?: QuoteRequestPrefill;
};

export function LeadForm({
  title = "Share your requirement",
  body = "Tell us what you are building and where. The ARS team will help route your enquiry to the right product and next step.",
  prefill,
}: LeadFormProps) {
  return <QuoteRequestForm title={title} body={body} prefill={prefill} />;
}
