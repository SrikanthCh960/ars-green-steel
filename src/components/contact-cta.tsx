import { SiteFooter } from "@/components/site-footer";

type ContactCtaProps = {
  eyebrow?: string;
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ContactCta(props: ContactCtaProps) {
  void props;
  return <SiteFooter />;
}
