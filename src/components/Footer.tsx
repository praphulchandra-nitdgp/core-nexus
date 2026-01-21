import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#aarohan", label: "Aarohan" },
  { href: "/#about", label: "About" },
  { href: "/#cells", label: "Cells" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card border-t border-border">
      {/* Abstract gradient accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-full w-40 bg-gradient-purple/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-full w-32 bg-gradient-cyan/10 blur-3xl" />
      </div>

      {/* Upper content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Column 1 — Logo */}
          <div className="md:col-span-6 flex items-center justify-center md:justify-start">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">
              CCA
            </h2>
          </div>

          {/* Column 2 — Navigation */}
          <nav className="md:col-span-3 space-y-4 text-sm font-light tracking-widest text-center md:text-left">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-muted-foreground hover:text-foreground transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Column 3 — Contact + Socials */}
          <div className="md:col-span-3 space-y-8 text-sm text-muted-foreground text-center md:text-left">
            {/* Contact */}
            <div>
              <p className="uppercase tracking-widest text-foreground/40 mb-3">
                Contact
              </p>
              <p>contact@ccanitd.in</p>
              <p>NIT Durgapur, India</p>
            </div>

            {/* Social */}
            <div>
              <p className="uppercase tracking-widest text-foreground/40 mb-3">
                Our Voice
              </p>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 hover:text-foreground transition">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-foreground transition">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brand block */}
      <div className="relative z-10 overflow-hidden">
        <h1 className="select-none text-[28vw] leading-none font-bold tracking-tight text-center gradient-text">
          CCA
        </h1>
        <div className="absolute right-2 bottom-0 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Made with ❤️ WDCT | CCA.
        </div>
      </div>
    </footer>
  );
}
