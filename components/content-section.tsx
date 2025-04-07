import Image from "next/image"

interface SectionProps {
  title: string
  content: string
  image: string
  reverse?: boolean
}

export function ContentSection({ title, content, image, reverse = false }: SectionProps) {
  return (
    <div className={`py-16 ${reverse ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={image || "/placeholder.svg?height=400&width=600"}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-maroon-900 leading-tight">{title}</h2>
              <div className="w-16 h-px bg-maroon-600 mb-6"></div>
              <p className="text-charcoal-600 leading-relaxed">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

