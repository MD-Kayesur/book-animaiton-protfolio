"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="mb-1 block text-[11px] uppercase tracking-widest text-ink-light/70">
          Name
        </label>
        <input
          required
          type="text"
          className="w-full border-b border-ink/20 bg-transparent pb-1.5 text-sm text-ink outline-none focus:border-gold-dark"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="mb-1 block text-[11px] uppercase tracking-widest text-ink-light/70">
          Email
        </label>
        <input
          required
          type="email"
          className="w-full border-b border-ink/20 bg-transparent pb-1.5 text-sm text-ink outline-none focus:border-gold-dark"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-[11px] uppercase tracking-widest text-ink-light/70">
          Message
        </label>
        <textarea
          required
          rows={3}
          className="w-full resize-none border-b border-ink/20 bg-transparent pb-1.5 text-sm text-ink outline-none focus:border-gold-dark"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-xs uppercase tracking-widest text-paper transition-colors hover:bg-ink-light"
      >
        {sent ? (
          <>
            <CheckCircle2 className="h-3.5 w-3.5" /> Sent
          </>
        ) : (
          <>
            <Send className="h-3.5 w-3.5" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
