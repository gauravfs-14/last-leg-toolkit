interface ToolProps {
  title: string
  description: string
  examples: string[]
  implementation: string
  icon: string
}

export function ToolCard({ title, description, examples, implementation, icon }: ToolProps) {
  const getIcon = (iconName: string) => {
    const icons = {
      Car: () => (
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
        >
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
          <circle cx="6.5" cy="16.5" r="2.5" />
          <circle cx="16.5" cy="16.5" r="2.5" />
        </svg>
      ),
      Users: () => (
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
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      Smartphone: () => (
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
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      MapPin: () => (
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
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      BarChart: () => (
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
        >
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="18" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
      ),
    }

    return icons[iconName as keyof typeof icons]?.() || icons.Car()
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-maroon-50 rounded-full flex items-center justify-center text-maroon-700 flex-shrink-0">
            {getIcon(icon)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-maroon-900">{title}</h3>
            <p className="text-charcoal-600 mt-2">{description}</p>
          </div>
        </div>
        <div className="ml-16">
          <h4 className="font-bold text-maroon-700 mb-2 text-sm uppercase tracking-wider">Examples</h4>
          <ul className="list-disc pl-5 mb-4 text-charcoal-600 space-y-1">
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
          <h4 className="font-bold text-maroon-700 mb-2 text-sm uppercase tracking-wider">Implementation</h4>
          <p className="text-charcoal-600">{implementation}</p>
        </div>
      </div>
    </div>
  )
}

