import { StrategyCard } from "@/components/strategy-card";
import implementationData from "@/data/implementation.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementation | Last-Leg Toolkit",
  description:
    "Strategies for implementing last-leg impaired driving prevention programs",
};

export default function ImplementationPage() {
  return (
    <>
      <div
        className="bg-maroon-900 py-16 md:py-24 relative"
        style={{
          backgroundImage: `url(${implementationData.bgImage})`, // Make sure this image exists in your public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-maroon-900/80"></div>{" "}
        {/* Maroon overlay */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {implementationData.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {implementationData.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-maroon-700 mb-2">
                  Plan
                </div>
                <div className="text-charcoal-600">
                  Develop partnerships and secure resources
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-maroon-700 mb-2">
                  Execute
                </div>
                <div className="text-charcoal-600">
                  Implement tools and strategies
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-maroon-700 mb-2">
                  Evaluate
                </div>
                <div className="text-charcoal-600">
                  Measure outcomes and refine approach
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {implementationData.strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="scroll-mt-24"
                  id={`strategy-${index}`}
                >
                  <StrategyCard
                    title={strategy.title}
                    description={strategy.description}
                    steps={strategy.steps}
                    example={strategy.example}
                    icon={strategy.icon}
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
              Implementation Roadmap
            </h2>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-maroon-200 hidden md:block"></div>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right relative">
                    <div className="absolute right-0 top-6 w-3 h-3 bg-maroon-500 rounded-full translate-x-1/2 hidden md:block"></div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-4 md:mb-0 md:ml-auto">
                      <h3 className="text-xl font-bold text-maroon-900 mb-2">
                        Month 1-2: Planning
                      </h3>
                      <p className="text-charcoal-600">
                        Form partnerships, secure funding, and develop
                        implementation plan
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute left-0 top-6 w-3 h-3 bg-maroon-500 rounded-full -translate-x-1/2 hidden md:block"></div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-maroon-900 mb-2">
                        Month 3-4: Pilot Testing
                      </h3>
                      <p className="text-charcoal-600">
                        Launch pilot programs in selected locations and gather
                        initial feedback
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right relative">
                    <div className="absolute right-0 top-6 w-3 h-3 bg-maroon-500 rounded-full translate-x-1/2 hidden md:block"></div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-4 md:mb-0 md:ml-auto">
                      <h3 className="text-xl font-bold text-maroon-900 mb-2">
                        Month 5-6: Refinement
                      </h3>
                      <p className="text-charcoal-600">
                        Analyze pilot results and make necessary adjustments to
                        the program
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="absolute left-0 top-6 w-3 h-3 bg-maroon-500 rounded-full -translate-x-1/2 hidden md:block"></div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-maroon-900 mb-2">
                        Month 7-12: Full Implementation
                      </h3>
                      <p className="text-charcoal-600">
                        Scale up successful strategies and establish ongoing
                        evaluation processes
                      </p>
                    </div>
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
