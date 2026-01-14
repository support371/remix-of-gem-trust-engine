const stats = [
  { value: "99.99%", label: "Uptime SLA", suffix: "" },
  { value: "< 15", label: "Min Response Time", suffix: "min" },
  { value: "500+", label: "Enterprise Clients", suffix: "" },
  { value: "24/7", label: "SOC Monitoring", suffix: "" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">
                {stat.value}
                {stat.suffix && (
                  <span className="text-lg md:text-xl text-muted-foreground ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
