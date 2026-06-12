import Image from "next/image";
import { ArrowRight, Download, ExternalLink, FileText, ImageIcon, Phone, Play, ShieldCheck } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics, SectionIntro } from "@/components/page-sections";
import type { LegacyAsset, LegacyPage } from "@/lib/legacy-content";

function splitTitle(title: string) {
  const words = title.split(" ").filter(Boolean);
  if (words.length <= 3) {
    return { title, accent: "restored." };
  }

  return {
    title: words.slice(0, Math.ceil(words.length * 0.62)).join(" "),
    accent: words.slice(Math.ceil(words.length * 0.62)).join(" "),
  };
}

function assetLabel(asset: LegacyAsset) {
  if (asset.type === "pdf") return "Download PDF";
  if (asset.type === "image" && asset.downloaded) return "Local ARS image";
  if (asset.type === "image") return "Source image mapped";
  return "Open asset";
}

function assetHref(asset: LegacyAsset) {
  return asset.downloaded && asset.localPath ? asset.localPath : asset.sourceUrl;
}

function sentenceCaseTitle(title: string) {
  const acronyms = ["ARS", "TMT", "CRS", "SGS", "EPD", "ISO", "SERC", "BIS", "NHAI", "PWD", "GRIHA"];
  if (title.length <= 5 || acronyms.includes(title)) return title;
  return title
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\b(Ars|Tmt|Crs|Sgs|Epd|Iso|Serc|Bis|Nhai|Pwd|Griha)\b/g, (word) => word.toUpperCase());
}

export function LegacyPageRenderer({ page }: { page: LegacyPage }) {
  const heroTitle = splitTitle(page.title);
  const sectionCards = page.sections
    .filter((section) => section.title)
    .slice(0, 18)
    .map((section) => ({
      title: sentenceCaseTitle(section.title),
      text: section.body || "Original section retained from the old ARS website. Final body copy should be verified against the source page before production approval.",
      icon: section.body ? FileText : ShieldCheck,
    }));
  const articleSections = page.sections
    .filter((section) => section.title && section.body)
    .slice(0, 18);
  const paragraphs = page.paragraphs
    .filter((item) => item.length > 40 && !articleSections.some((section) => section.body === item))
    .slice(0, 8);
  const imageAssets = page.assets.filter((asset) => asset.type === "image").slice(0, 9);
  const downloadAssets = page.assets.filter((asset) => asset.type === "pdf").slice(0, 12);
  const contactItems = [
    ...page.contact.phones.map((value) => ({ title: "Phone", text: value })),
    ...page.contact.emails.map((value) => ({ title: "Email", text: value })),
    ...page.contact.addresses.map((value) => ({ title: value.label, text: value.text })),
  ];

  return (
    <PageShell
      hero={{
        eyebrow: page.kind === "blog" ? "Legacy article restored" : "Legacy page restored",
        title: heroTitle.title,
        accent: heroTitle.accent,
        body: page.intro,
        primaryLabel: "Request quote",
        primaryHref: "/request-quote",
        secondaryLabel: "Original source",
        secondaryHref: page.sourceUrl,
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "source", value: "Old", label: `Original URL preserved: ${page.path}` },
          { kicker: "sections", value: String(page.sections.length), label: "Original section headings extracted and retained." },
          { kicker: "assets", value: String(page.assets.length), label: "Images, downloads, and media references mapped from the source page." },
          { kicker: "status", value: page.needsClientVerification ? "Check" : "Live", label: page.needsClientVerification ? "Some source details need client verification." : "Content restored from source crawl." },
        ]}
      />

      {page.kind === "blog" && articleSections.length ? (
        <section className="bg-white py-24">
          <div className="ars-container grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">Article index</p>
                <div className="mt-6 grid gap-3">
                  {articleSections.slice(0, 10).map((section) => (
                    <a key={section.title} className="text-sm font-semibold leading-6 text-steel-700 transition hover:text-brand-blue" href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {sentenceCaseTitle(section.title)}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
            <article className="rounded-[8px] border border-ink-900/10 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] md:p-10">
              {articleSections.map((section, index) => (
                <section key={section.title} id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className={index === 0 ? "" : "mt-12 border-t border-ink-900/10 pt-10"}>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">Section {index + 1}</p>
                  <h2 className="font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal text-ink-900">{sentenceCaseTitle(section.title)}</h2>
                  <p className="mt-6 text-lg leading-9 text-steel-700">{section.body}</p>
                </section>
              ))}
            </article>
          </div>
        </section>
      ) : sectionCards.length ? (
        <ContentBand
          eyebrow="Restored page sections"
          title="Old content, cleaned into the modern system."
          body="These blocks preserve the original ARS section structure while removing repeated navigation, calculator, and form extraction noise."
          cards={sectionCards}
          columns={2}
        />
      ) : null}

      {page.kind !== "blog" && paragraphs.length ? (
        <section className="bg-white py-24">
          <div className="ars-container">
            <SectionIntro
              eyebrow="Detailed copy"
              title="Supporting content restored for review."
              body="These blocks keep useful source text visible without overwhelming the main page flow."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {paragraphs.map((paragraph, index) => (
                <article key={`${page.slug}-paragraph-${index}`} className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">Copy block {index + 1}</p>
                  <p className="mt-4 text-base leading-8 text-steel-700">{paragraph}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {imageAssets.length || downloadAssets.length ? (
        <section className="bg-[#f8f9fb] py-24">
          <div className="ars-container">
            <SectionIntro
              eyebrow="Source media"
              title="Original assets mapped, not invented."
              body="Image files are mapped from the original ARS website. Locally available assets are shown directly; missing files remain clearly marked until the original domain or client asset pack is available."
            />
            {imageAssets.length ? (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {imageAssets.map((asset) => (
                  <a key={asset.sourceUrl} className="group block overflow-hidden rounded-[8px] border border-ink-900/10 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)]" href={assetHref(asset)} target="_blank" rel="noreferrer">
                    <div className="relative flex h-48 items-center justify-center bg-[#eef2f7] text-brand-blue">
                      {asset.downloaded && asset.localPath ? (
                        <Image
                          src={asset.localPath}
                          alt={asset.fileName}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="grid justify-items-center gap-3 px-6 text-center">
                          <ImageIcon size={30} />
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel-700">Original ARS image missing locally</p>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-blue">
                        <ImageIcon size={17} /> {assetLabel(asset)}
                      </div>
                      <p className="mt-3 break-all text-sm leading-6 text-steel-700">{asset.fileName}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : null}

            {downloadAssets.length ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {downloadAssets.map((asset) => (
                  <a key={asset.sourceUrl} className="focus-ring flex items-center justify-between gap-4 rounded-[8px] border border-ink-900/10 bg-white p-5 text-ink-900 transition hover:border-brand-blue hover:text-brand-blue" href={assetHref(asset)} target="_blank" rel="noreferrer">
                    <span className="flex min-w-0 items-center gap-3">
                      <Download size={19} className="shrink-0 text-brand-blue" />
                      <span className="truncate text-sm font-bold">{asset.fileName}</span>
                    </span>
                    <ExternalLink size={17} className="shrink-0" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {page.videos.length ? (
        <section className="bg-white py-24">
          <div className="ars-container">
            <SectionIntro
              eyebrow="Video references"
              title="Original video embeds retained."
              body="These are the old site video references. They remain external embeds until approved local video files are supplied."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {page.videos.map((video) => (
                <article key={video.url} className="overflow-hidden rounded-[8px] border border-ink-900/10 bg-[#f8f9fb]">
                  {video.type === "youtube" ? (
                    <iframe className="aspect-video w-full" src={video.url} title={`${page.title} video`} allowFullScreen loading="lazy" />
                  ) : (
                    <a className="flex min-h-48 items-center justify-center gap-3 text-base font-bold text-brand-blue" href={video.url} target="_blank" rel="noreferrer">
                      <Play size={20} /> Open source video
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {contactItems.length ? (
        <ContentBand
          eyebrow="Original contact details"
          title="Contact data restored from the source page."
          body={page.needsClientVerification ? "Email values appeared protected in the old markup and should be confirmed by the client before final launch." : "These details came from the old website crawl."}
          tone="white"
          cards={contactItems.map((item) => ({ title: item.title, text: item.text, icon: Phone }))}
        />
      ) : null}

      <section className="bg-[#f8f9fb] py-16">
        <div className="ars-container">
          <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark" href={page.sourceUrl} target="_blank" rel="noreferrer">
            Compare original page <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
