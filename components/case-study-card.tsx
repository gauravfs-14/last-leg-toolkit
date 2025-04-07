import Image from "next/image"

interface CaseStudyProps {
  title: string
  location: string
  description: string
  outcomes: string
  lessons: string
  image: string
}

export function CaseStudyCard({ title, location, description, outcomes, lessons, image }: CaseStudyProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="relative h-64 md:h-full w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=400&width=300"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex flex-col h-full">
            <div>
              <h3 className="text-2xl font-bold mb-1 text-maroon-900">{title}</h3>
              <p className="text-maroon-700 font-medium mb-4">{location}</p>
              <p className="text-charcoal-600 mb-4">{description}</p>
            </div>
            <div className="mt-auto">
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="font-bold text-maroon-700 mb-2">Outcomes</h4>
                <p className="text-charcoal-600 mb-4">{outcomes}</p>
                <h4 className="font-bold text-maroon-700 mb-2">Key Lessons</h4>
                <p className="text-charcoal-600">{lessons}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

