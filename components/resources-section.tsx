import Link from "next/link"
import { ExternalLink, ChevronRight } from "lucide-react"
import resourcesData from "@/data/resources.json"

export function ResourcesSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24" aria-labelledby="resources-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 id="resources-heading" className="text-3xl sm:text-4xl font-bold mb-12 text-center text-charcoal-800">
          Resources & Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {resourcesData.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-maroon-700 pb-3 border-b">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className="inline-flex items-center w-full text-charcoal-600 hover:text-maroon-700 transition-colors py-1 focus:outline-none focus:text-maroon-700"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <ChevronRight className="mr-2 w-4 h-4 text-maroon-500 flex-shrink-0" aria-hidden="true" />
                      <span>{link.title}</span>
                      {link.external && <ExternalLink className="ml-2 w-3 h-3" aria-hidden="true" />}
                      {link.external && <span className="sr-only">(opens in a new tab)</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

