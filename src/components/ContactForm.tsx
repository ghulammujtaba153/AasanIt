"use client";

import { site } from "@/data/site";

export function ContactForm() {
  return (
    <form
      className="mt-16 grid gap-8"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const company = String(data.get("company") ?? "");
        const message = String(data.get("message") ?? "");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
        )}`;
      }}
    >
      <label className="block border-b border-line pb-3">
        <span className="meta">Name</span>
        <input
          required
          name="name"
          className="mt-2 w-full bg-transparent text-lg outline-none"
          autoComplete="name"
        />
      </label>
      <label className="block border-b border-line pb-3">
        <span className="meta">Email</span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full bg-transparent text-lg outline-none"
          autoComplete="email"
        />
      </label>
      <label className="block border-b border-line pb-3">
        <span className="meta">Company</span>
        <input
          name="company"
          className="mt-2 w-full bg-transparent text-lg outline-none"
          autoComplete="organization"
        />
      </label>
      <label className="block border-b border-line pb-3">
        <span className="meta">What are you building?</span>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full resize-none bg-transparent text-lg outline-none"
        />
      </label>
      <button type="submit" className="link-arrow inline-flex w-fit text-accent" data-cursor="talk">
        Send a note →
      </button>
    </form>
  );
}
