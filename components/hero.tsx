import Link from "next/link"
import Image from "next/image"

interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  image: string
}

export function Hero({ title, subtitle, buttonText, buttonLink, image }: HeroProps) {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="relative h-full w-full">
        <Image src={image || "/placeholder.svg?height=600&width=1920"} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center w-full">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">{subtitle}</p>
              <Link
                href={buttonLink}
                className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center"
              >
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

