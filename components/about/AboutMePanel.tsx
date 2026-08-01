"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { HeroAvatar } from "@/components/hero/HeroAvatar";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { aboutStats } from "@/data/about";

export function AboutMePanel() {
  const [copied, setCopied] = useState(false);
  const emailSocial = socials.find((s) => s.kind === "email");
  const email = emailSocial?.href?.replace("mailto:", "") ?? "";
  const visibleSocials = socials.filter((s) => s.available);

  async function handleCopyEmail() {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {
        window.prompt("Copy email:", email);
      }
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">About me</p>

      <div className="mt-4">
        <HeroAvatar sizeClassName="h-20 w-20" />
      </div>

      <h1 className="mt-4 text-xl font-semibold tracking-tight">{site.name}</h1>
      <p className="mt-1 text-sm text-muted">
        {site.title} · {site.location}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{site.bio}</p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
          {copied ? "Copied" : "Copy email"}
        </button>

        <div className="flex items-center gap-2">
          {visibleSocials.map((social) => (
            <SocialIcon key={social.kind} social={social} size={34} />
          ))}
        </div>
      </div>

      <dl className="mt-7 flex flex-col gap-5 border-t border-border pt-6">
        {aboutStats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-[11px] font-medium tracking-wide text-muted uppercase">
              {stat.label}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/90">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
