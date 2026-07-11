"use client";

import Page from "@/components/Book/Page";
import ContactForm from "@/components/UI/ContactForm";
import Footer from "@/components/UI/Footer";

export default function ContactPage() {
  return (
    <Page pageNumber={11} align="left">
      <div onClick={(e) => e.stopPropagation()}>
        <h2 className="font-display text-2xl font-bold text-ink">Let's Talk</h2>
        <span className="mb-5 mt-1 block h-px w-12 bg-gold-dark/60" />
        <p className="mb-5 text-sm text-ink-light">
          Have a project in mind, or just want to say hello? My inbox is always open.
        </p>
        <ContactForm />
        <Footer />
      </div>
    </Page>
  );
}
