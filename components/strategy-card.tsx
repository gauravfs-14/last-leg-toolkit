interface StrategyProps {
  title: string
  description: string
  steps: string[]
  example: string
  icon: string
}

export function StrategyCard({ title, description, steps, example, icon }: StrategyProps) {
  const getIcon = (iconName: string) => {
    const icons = {
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
      FlaskConical: () => (
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
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      ),
      DollarSign: () => (
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
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      ScrollText: () => (
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
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M15 8h-5" />
          <path d="M15 12h-5" />
        </svg>
      ),
      Laptop: () => (
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
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
        </svg>
      ),
      LineChart: () => (
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
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
    }

    return icons[iconName as keyof typeof icons]?.() || icons.Users()
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
          <h4 className="font-bold text-maroon-700 mb-2 text-sm uppercase tracking-wider">Key Steps</h4>
          <ol className="list-decimal pl-5 mb-4 text-charcoal-600 space-y-1">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <h4 className="font-bold text-maroon-700 mb-2 text-sm uppercase tracking-wider">Example</h4>
          <p className="text-charcoal-600">{example}</p>
        </div>
      </div>
    </div>
  )
}

