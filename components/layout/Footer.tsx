import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/nikhilrao19/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/yourprofile",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:your@email.com",
    label: "Email",
    icon: Mail,
  },
];

const footerNav = [
  { href: "/about",    label: "About"    },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05080F] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-mono text-sm font-bold text-[#00D492] tracking-widest mb-2">
              NR<span className="text-white/25">://</span>
              <span className="text-white/50 font-normal">finance</span>
            </p>
            <p className="text-white/35 text-sm leading-relaxed">
              Numbers tell stories. I help decode them — one trade,
              one model, one insight at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-3">
              Pages
            </p>
            <nav className="flex flex-col gap-2">
              {footerNav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} Nikhil Rao · All rights reserved
          </p>
          <p className="text-white/15 text-xs font-mono">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
