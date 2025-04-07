import { ContentSection } from "@/components/content-section";
import aboutData from "@/data/about.json";
import { Shield, Users, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Last-Leg Toolkit",
  description:
    "Learn about the Last-Leg Toolkit for preventing impaired driving on the final miles of a journey",
};

export default function AboutPage() {
  return (
    <>
      <div
        className="bg-maroon-900 py-16 md:py-24 relative"
        style={{
          backgroundImage: `url(${aboutData.bgImage})`, // Make sure this image exists in your public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-maroon-900/80"></div>{" "}
        {/* Maroon overlay */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {aboutData.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {aboutData.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4 text-maroon-700">
                  <Shield className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-maroon-900 mb-2">
                  Comprehensive Framework
                </h3>
                <p className="text-charcoal-600 text-sm">
                  A scalable toolkit designed for State Highway Safety Offices
                  and their partners
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4 text-maroon-700">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-maroon-900 mb-2">
                  Community-Focused
                </h3>
                <p className="text-charcoal-600 text-sm">
                  Adaptable to different community contexts, from urban centers
                  to rural areas
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4 text-maroon-700">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-maroon-900 mb-2">
                  Evidence-Based
                </h3>
                <p className="text-charcoal-600 text-sm">
                  Built on research and successful case studies from across the
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {aboutData.sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          content={section.content}
          image={section.image}
          reverse={index % 2 !== 0}
        />
      ))}

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-maroon-900 mb-6">
              Ready to Implement the Last-Leg Toolkit?
            </h2>
            <p className="text-lg text-charcoal-600 mb-8">
              Explore our comprehensive resources and start making a difference
              in your community today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/case-studies"
                className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                View Case Studies
              </a>
              <a
                href="/digital-tools"
                className="bg-white hover:bg-gray-50 text-maroon-700 border border-maroon-200 px-6 py-3 rounded-md transition-colors font-medium"
              >
                Explore Digital Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
