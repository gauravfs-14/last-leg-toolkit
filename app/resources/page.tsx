import resourcesData from "@/data/resources.json";
import { Download, FileText, BookOpen, BarChart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Last-Leg Toolkit",
  description:
    "Outreach strategies and research priorities for last-leg impaired driving prevention",
};

export default function ResourcesPage() {
  return (
    <>
      <div
        className="bg-maroon-900 py-16 md:py-24 relative"
        style={{
          backgroundImage: `url(${resourcesData.bgImage})`, // Make sure this image exists in your public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-maroon-900/80"></div>{" "}
        {/* Maroon overlay */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {resourcesData.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {resourcesData.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {resourcesData.sections.map((section, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-3xl font-bold text-maroon-900 mb-6 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <p className="text-charcoal-600 mb-8 text-lg">
                  {section.content}
                </p>

                {section.strategies && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {section.strategies.map((strategy, strategyIndex) => (
                      <div
                        key={strategyIndex}
                        className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden"
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-maroon-900 mb-3">
                            {strategy.title}
                          </h3>
                          <p className="text-charcoal-600 mb-4">
                            {strategy.description}
                          </p>
                          <h4 className="font-bold text-maroon-700 mb-2 text-sm uppercase tracking-wider">
                            Key Examples
                          </h4>
                          <ul className="list-disc pl-5 text-charcoal-600 space-y-2">
                            {strategy.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.priorities && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {section.priorities.map((priority, priorityIndex) => (
                      <div
                        key={priorityIndex}
                        className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden"
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-maroon-900 mb-3">
                            {priority.title}
                          </h3>
                          <p className="text-charcoal-600 mb-4">
                            {priority.description}
                          </p>
                          <h4 className="font-bold text-maroon-700 mb-2 text-sm uppercase tracking-wider">
                            Research Areas
                          </h4>
                          <ul className="list-disc pl-5 text-charcoal-600 space-y-2">
                            {priority.areas.map((area, areaIndex) => (
                              <li key={areaIndex}>{area}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.references && (
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-maroon-900 mb-4 flex items-center">
                      <FileText className="mr-2 text-maroon-600 w-5 h-5" />{" "}
                      References
                    </h3>
                    <ul className="list-decimal pl-5 text-charcoal-600 space-y-3">
                      {section.references.map((reference, referenceIndex) => (
                        <li key={referenceIndex} className="pl-2">
                          {reference}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mt-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold text-maroon-900 mb-3">
                    Download the Complete Toolkit
                  </h3>
                  <p className="text-charcoal-600">
                    Access the full Last-Leg Impaired Driving Prevention Toolkit
                    as a comprehensive PDF document for offline reference and
                    sharing with your team.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <a
                    href="#"
                    className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center"
                  >
                    <Download className="mr-2 w-5 h-5" /> Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-maroon-900 mb-8">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-maroon-700 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-maroon-900 mb-2">
                  Educational Materials
                </h3>
                <p className="text-charcoal-600 text-sm text-center mb-4">
                  Access presentations, handouts, and training materials for
                  your team.
                </p>
                <a
                  href="#"
                  className="text-maroon-600 font-medium text-sm hover:text-maroon-800 mt-auto"
                >
                  Browse materials
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="text-maroon-700 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-maroon-900 mb-2">
                  Data Resources
                </h3>
                <p className="text-charcoal-600 text-sm text-center mb-4">
                  Find statistics, research papers, and data visualization
                  tools.
                </p>
                <a
                  href="#"
                  className="text-maroon-600 font-medium text-sm hover:text-maroon-800 mt-auto"
                >
                  Explore data
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-maroon-700 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-maroon-900 mb-2">
                  Templates & Forms
                </h3>
                <p className="text-charcoal-600 text-sm text-center mb-4">
                  Download ready-to-use templates for program implementation.
                </p>
                <a
                  href="#"
                  className="text-maroon-600 font-medium text-sm hover:text-maroon-800 mt-auto"
                >
                  Get templates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
