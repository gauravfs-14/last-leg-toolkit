import { HeroSlider } from "@/components/hero-slider"
import { InfoCards } from "@/components/info-cards"
import { StatsSection } from "@/components/stats-section"
import homeData from "@/data/home.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Last-Leg Toolkit",
  description: "A comprehensive framework for addressing the final miles of impaired journeys",
}

export default function Home() {
  return (
    <>
      <HeroSlider slides={homeData.hero.slides} />

      <InfoCards cards={homeData.cards} />

      <section className="py-16 bg-white" aria-labelledby="introduction-heading">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 id="introduction-heading" className="text-3xl md:text-4xl font-bold mb-6 text-maroon-900">
              {homeData.introduction.title}
            </h2>
            <p className="text-lg text-charcoal-600">{homeData.introduction.content}</p>
          </div>
        </div>
      </section>

      <StatsSection stats={homeData.stats} />
    </>
  )
}

