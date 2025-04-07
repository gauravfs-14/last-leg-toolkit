"use client";

import { ToolCard } from "@/components/tool-card";
import toolsData from "@/data/digital-tools.json";
import { ArrowRight } from "lucide-react";
import { getIcon } from "./_components/getIcon";

export default function DigitalToolsClientPage() {
  return (
    <>
      <div
        className="bg-maroon-900 py-16 md:py-24 relative"
        style={{
          backgroundImage: `url(${toolsData.bgImage})`, // Make sure this image exists in your public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-maroon-900/80"></div>{" "}
        {/* Maroon overlay */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {toolsData.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {toolsData.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {toolsData.tools.slice(0, 3).map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4 text-maroon-700">
                    {getIcon(tool.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm mb-4">
                    {tool.description}
                  </p>
                  <button
                    className="text-maroon-600 font-medium flex items-center text-sm hover:text-maroon-800 transition-colors"
                    onClick={() =>
                      document
                        .getElementById(`tool-${index}`)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {toolsData.tools.map((tool, index) => (
                <div id={`tool-${index}`} key={index} className="scroll-mt-24">
                  <ToolCard
                    title={tool.title}
                    description={tool.description}
                    examples={tool.examples}
                    implementation={tool.implementation}
                    icon={tool.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-maroon-900 mb-10">
              How These Tools Work Together
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-maroon-200 -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-12 relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm md:mr-8 relative">
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-maroon-500 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
                    <h3 className="text-xl font-bold text-maroon-900 mb-3">
                      1. Identify the Problem
                    </h3>
                    <p className="text-charcoal-600">
                      Use data analytics tools to identify hotspots where
                      last-leg impaired driving is prevalent.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0"></div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mt-4 md:mt-0"></div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm md:ml-8 relative">
                    <div className="absolute left-0 top-1/2 w-3 h-3 bg-maroon-500 rounded-full -translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
                    <h3 className="text-xl font-bold text-maroon-900 mb-3">
                      2. Implement Digital Solutions
                    </h3>
                    <p className="text-charcoal-600">
                      Deploy ridesharing integration, geo-fencing, and mobile
                      impairment assessment tools in targeted areas.
                    </p>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm md:mr-8 relative">
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-maroon-500 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
                    <h3 className="text-xl font-bold text-maroon-900 mb-3">
                      3. Educate and Promote
                    </h3>
                    <p className="text-charcoal-600">
                      Use location-based messaging to inform travelers about
                      available alternatives to impaired driving.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0"></div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mt-4 md:mt-0"></div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm md:ml-8 relative">
                    <div className="absolute left-0 top-1/2 w-3 h-3 bg-maroon-500 rounded-full -translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
                    <h3 className="text-xl font-bold text-maroon-900 mb-3">
                      4. Measure and Refine
                    </h3>
                    <p className="text-charcoal-600">
                      Track outcomes and continuously improve the tools based on
                      data and user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
