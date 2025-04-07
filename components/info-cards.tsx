import Link from "next/link"
import { ArrowRight, FileText, Smartphone, Settings, BookOpen } from "lucide-react"

interface CardProps {
  title: string
  description: string
  buttonLink: string
  icon: string
}

export function InfoCards({ cards }: { cards: CardProps[] }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-5 h-5" aria-hidden="true" />
      case "Smartphone":
        return <Smartphone className="w-5 h-5" aria-hidden="true" />
      case "Settings":
        return <Settings className="w-5 h-5" aria-hidden="true" />
      case "BookOpen":
        return <BookOpen className="w-5 h-5" aria-hidden="true" />
      default:
        return <FileText className="w-5 h-5" aria-hidden="true" />
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 md:-mt-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center mb-4 text-maroon-700">
                  {getIcon(card.icon)}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-maroon-900">{card.title}</h2>
                <p className="mb-6 flex-grow text-charcoal-600 text-sm sm:text-base">{card.description}</p>
                <Link
                  href={card.buttonLink}
                  className="inline-flex items-center justify-between w-full rounded-md border border-maroon-200 px-4 py-3 text-sm text-maroon-700 transition-all duration-200 hover:bg-maroon-50 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

