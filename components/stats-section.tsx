interface StatProps {
  value: string
  label: string
}

export function StatsSection({ stats }: { stats: StatProps[] }) {
  return (
    <section className="bg-maroon-900 py-16" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 id="stats-heading" className="sr-only">
            Key Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2" aria-hidden="true">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm md:text-base">
                  <span className="sr-only">Statistic: </span>
                  {stat.value} {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

