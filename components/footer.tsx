import Link from "next/link";
import { Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Last-Leg Toolkit</h2>
            <p className="text-gray-300 mb-4">
              A comprehensive framework for addressing the final miles of
              impaired journeys.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal-800 p-1 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal-800 p-1 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a
                href="mailto:info@lastlegtoolkit.org"
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal-800 p-1 rounded-full"
                aria-label="Email"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/digital-tools"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Digital Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/implementation"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Implementation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">
                For more information about the Last-Leg Toolkit, please contact:
              </p>
              <p className="text-gray-300">
                <a
                  href="https://ait-lab.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors focus:outline-none focus:text-white"
                >
                  AIT Lab
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Last-Leg Toolkit. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Based on: National Academies of Sciences (TRB) – Toolkit for
            Reducing Substance-Impaired Driving for the Last Leg of the Journey
            (Project BTS-39)
          </p>
          <p className="mt-2 text-sm">
            Developed By:{" "}
            <a
              href="https://gaurabchhetri.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus:text-white"
            >
              Gaurab Chhetri
            </a>
            , Supported By:{" "}
            <a
              href="https://ait-lab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus:text-white"
            >
              AIT Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
