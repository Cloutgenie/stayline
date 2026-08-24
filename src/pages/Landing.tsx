import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";
import { SiteFrame } from "../components/SiteFrame";
import {
  AEO,
  FAQS,
  H1,
  ICPS,
  SEO_META,
  SEO_TITLE,
  SUB,
} from "../copy/shells";
import { INITIAL_STUDENTS, needsAttention } from "../data/students";

export function Landing() {
  const n = INITIAL_STUDENTS.filter(needsAttention).length;
  const faqJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  });

  return (
    <SiteFrame>
      <PageMeta title={SEO_TITLE} description={SEO_META} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJson }}
      />

      <main className="land">
        <section className="land-hero">
          <h1>{H1}</h1>
          <p className="land-sub">{SUB}</p>
          <p className="land-aeo">{AEO}</p>
          <p className="tease">
            <span className="tease-n">{n}</span>
            <span>this week</span>
          </p>
          <div className="land-actions">
            <Link className="btn" to="/app">
              Open success desk
            </Link>
            <Link className="btn btn-ghost" to="/retention">
              Retention desk
            </Link>
          </div>
        </section>

        <section className="land-icps" aria-label="Who works the inbox">
          {ICPS.map((item) => (
            <article key={item.label}>
              <h2>{item.label}</h2>
              <p>{item.line}</p>
            </article>
          ))}
        </section>

        <section className="land-faq" aria-label="Questions">
          {FAQS.map((item) => (
            <article key={item.q}>
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </article>
          ))}
        </section>
      </main>
    </SiteFrame>
  );
}
