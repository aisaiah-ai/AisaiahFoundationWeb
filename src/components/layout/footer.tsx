import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { footerNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-10" />
              <div>
                <div className="text-lg font-bold">Aisaiah Foundation</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">
                  Prayer · Reflection · Service
                </div>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.formatted[0]}
                  <br />
                  {siteConfig.address.formatted[1]}
                </span>
              </div>
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Organization
            </h3>
            <ul className="space-y-3">
              {footerNavItems.organization.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerNavItems.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerNavItems.connect.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Aisaiah Foundation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerNavItems.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center mt-6 max-w-xl mx-auto">
            Helping people grow in faith through prayer, reflection, and service.
          </p>
          <p className="text-xs text-slate-600 text-center mt-3 max-w-3xl mx-auto">
            Aisaiah Foundation is a registered 501(c)(3) nonprofit organization.
            Contributions are tax-deductible to the extent permitted by law.
          </p>
        </div>
      </div>
    </footer>
  );
}
