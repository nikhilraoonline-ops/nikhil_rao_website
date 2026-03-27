"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#05080F]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo / wordmark */}
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-widest text-[#00D492] hover:text-[#00D492]/80 transition-colors"
          >
            NR<span className="text-white/25">://</span>
            <span className="text-white/50 font-normal">finance</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors duration-150",
                  pathname === href
                    ? "text-white"
                    : "text-white/45 hover:text-white/80"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/50 hover:text-white transition-colors p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#05080F]/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium py-2.5 px-3 rounded transition-colors",
                  pathname === href
                    ? "text-white bg-white/5"
                    : "text-white/45 hover:text-white/80 hover:bg-white/3"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
