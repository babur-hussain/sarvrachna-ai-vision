import { useRef, useEffect } from "react";

const TechStackSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const techStacks = [
    { name: "React", logo: "⚛️", category: "Frontend" },
    { name: "Next.js", logo: "▲", category: "Framework" },
    { name: "Python", logo: "🐍", category: "Backend" },
    { name: "TensorFlow", logo: "🧠", category: "AI/ML" },
    { name: "Node.js", logo: "📗", category: "Runtime" },
    { name: "PostgreSQL", logo: "🐘", category: "Database" },
    { name: "AWS", logo: "☁️", category: "Cloud" },
    { name: "Docker", logo: "🐳", category: "DevOps" },
    { name: "TypeScript", logo: "📘", category: "Language" },
    { name: "GraphQL", logo: "📊", category: "API" },
    { name: "MongoDB", logo: "🍃", category: "Database" },
    { name: "Redis", logo: "🔴", category: "Cache" },
    { name: "Kubernetes", logo: "⚙️", category: "Orchestration" },
    { name: "OpenAI", logo: "🤖", category: "AI" },
    { name: "Stripe", logo: "💳", category: "Payment" },
    { name: "Firebase", logo: "🔥", category: "Backend" },
    { name: "Tailwind", logo: "🎨", category: "Styling" },
    { name: "Vercel", logo: "▲", category: "Deployment" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
            <span className="w-2 h-2 bg-brand-violet rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">Technology Stack</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="gradient-secondary bg-clip-text text-transparent">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the best tools and frameworks in the industry to deliver 
            robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Horizontal Scrolling Tech Stack */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden pb-4"
            style={{ 
              width: 'calc(200% + 24px)',
              animation: 'scroll 60s linear infinite'
            }}
          >
            {/* First Set */}
            {techStacks.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-32 h-32 glass rounded-2xl border flex flex-col items-center justify-center hover-lift hover-glow transition-smooth cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.logo}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {techStacks.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-32 h-32 glass rounded-2xl border flex flex-col items-center justify-center hover-lift hover-glow transition-smooth cursor-pointer">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.logo}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
          {["Frontend", "Backend", "AI/ML", "Cloud", "Database", "DevOps"].map((category) => (
            <div key={category} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-sky font-bold text-sm">{category.slice(0, 2)}</span>
              </div>
              <div className="text-sm font-medium text-foreground">{category}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl glass border hover-glow transition-smooth">
            <span className="text-lg font-medium mr-6">
              Want to see our tech expertise in action?
            </span>
            <button className="px-6 py-2 gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-smooth">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;