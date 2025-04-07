import { CaseStudyCard } from "@/components/case-study-card"
import caseStudiesData from "@/data/case-studies.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Last-Leg Toolkit",
  description: "Real-world examples of successful programs that have tackled last-leg impaired driving challenges",
}

export default function CaseStudiesPage() {
  return (
    <>
      <div className="bg-maroon-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{caseStudiesData.title}</h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">{caseStudiesData.introduction}</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-maroon-700 mb-2">{caseStudiesData.caseStudies.length}</div>
                <div className="text-charcoal-600">Case Studies</div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-maroon-700 mb-2">5+</div>
                <div className="text-charcoal-600">States Represented</div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-maroon-700 mb-2">1000s</div>
                <div className="text-charcoal-600">Lives Impacted</div>
              </div>
            </div>

            {caseStudiesData.caseStudies.map((caseStudy, index) => (
              <div key={index} className="mb-16">
                <CaseStudyCard
                  title={caseStudy.title}
                  location={caseStudy.location}
                  description={caseStudy.description}
                  outcomes={caseStudy.outcomes}
                  lessons={caseStudy.lessons}
                  image={caseStudy.image}
                />
                {index < caseStudiesData.caseStudies.length - 1 && (
                  <div className="flex justify-center my-12">
                    <div className="w-16 h-px bg-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-maroon-900 mb-10">Key Takeaways from Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-maroon-900 mb-3">Community Partnerships</h3>
                <p className="text-charcoal-600">
                  Successful programs involve multiple stakeholders, including transit agencies, law enforcement,
                  businesses, and community organizations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-maroon-900 mb-3">Accessibility</h3>
                <p className="text-charcoal-600">
                  Making safe alternatives convenient, low-cost (or free), and socially acceptable is key to program
                  success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-maroon-900 mb-3">Sustainable Funding</h3>
                <p className="text-charcoal-600">
                  Programs that establish reliable funding sources through public-private partnerships tend to have
                  longer-lasting impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-maroon-900 mb-3">Measurable Outcomes</h3>
                <p className="text-charcoal-600">
                  The most effective programs track and report their impact, showing significant reductions in impaired
                  driving incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

