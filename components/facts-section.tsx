"use client"

import { useState, useEffect, useRef } from "react"
import factsData from "@/data/facts.json"
import { AlertTriangle } from "lucide-react"

export function FactsSection() {
  const [currentFact, setCurrentFact] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentFact((prev) => (prev === factsData.facts.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const pauseRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const resumeRotation = () => {
    pauseRotation()
    intervalRef.current = setInterval(() => {
      setCurrentFact((prev) => (prev === factsData.facts.length - 1 ? 0 : prev + 1))
    }, 5000)
  }

  return (
    <div className="p-8 sm:p-10">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-maroon-600 w-6 h-6" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-charcoal-800" id="facts-heading">
          {factsData.title}
        </h2>
      </div>

      <div
        className="relative h-32 overflow-hidden bg-gray-50 rounded-lg p-6 mb-6"
        onMouseEnter={pauseRotation}
        onMouseLeave={resumeRotation}
        onFocus={pauseRotation}
        onBlur={resumeRotation}
        aria-labelledby="facts-heading"
      >
        {factsData.facts.map((fact, index) => (
          <p
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center px-4 ${
              index === currentFact ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentFact}
          >
            <span className="text-charcoal-700 font-medium">{fact}</span>
          </p>
        ))}
      </div>

      <div className="flex justify-center space-x-2" role="tablist" aria-label="Fact navigation">
        {factsData.facts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFact(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentFact ? "bg-maroon-600 w-6" : "bg-gray-300 hover:bg-maroon-300"
            }`}
            aria-label={`View fact ${index + 1}`}
            aria-selected={index === currentFact}
            role="tab"
            tabIndex={index === currentFact ? 0 : -1}
          />
        ))}
      </div>
    </div>
  )
}

