import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GemAssist } from "@/components/GemAssist";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Newspaper, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Latest Ransomware Tactics",
    excerpt: "An analysis of evolving ransomware techniques and how to protect your organization. We examine recent attack patterns and provide actionable defense strategies.",
    author: {
      name: "Dr. Sarah Chen",
      credentials: "CISSP, CISM",
      role: "Chief Security Officer",
    },
    date: "2026-01-12",
    lastUpdated: "2026-01-12",
    readTime: "8 min",
    category: "Threat Intelligence",
    featured: true,
  },
  {
    id: 2,
    title: "The Role of AI in Modern Threat Detection",
    excerpt: "How machine learning is transforming security operations and threat hunting. Explore practical applications and implementation considerations.",
    author: {
      name: "Michael Torres",
      credentials: "CISM",
      role: "Security Architect",
    },
    date: "2026-01-08",
    lastUpdated: "2026-01-10",
    readTime: "12 min",
    category: "Technology",
    featured: true,
  },
  {
    id: 3,
    title: "Building a Security-First Culture",
    excerpt: "Strategies for embedding security awareness throughout your organization. From executive buy-in to frontline training.",
    author: {
      name: "Alex Rodriguez",
      credentials: "GCIH, GPEN",
      role: "Incident Response Lead",
    },
    date: "2026-01-03",
    lastUpdated: "2026-01-03",
    readTime: "6 min",
    category: "Best Practices",
    featured: false,
  },
  {
    id: 4,
    title: "Zero Trust: Beyond the Buzzword",
    excerpt: "A practical guide to implementing zero trust architecture in complex enterprise environments with legacy systems.",
    author: {
      name: "Jennifer Park",
      credentials: "CCSP",
      role: "Cloud Security Engineer",
    },
    date: "2025-12-28",
    lastUpdated: "2025-12-28",
    readTime: "10 min",
    category: "Architecture",
    featured: false,
  },
  {
    id: 5,
    title: "Incident Response: Lessons from the Field",
    excerpt: "Real-world lessons learned from handling security incidents. What works, what doesn't, and how to improve your response capabilities.",
    author: {
      name: "Alex Rodriguez",
      credentials: "GCIH, GPEN",
      role: "Incident Response Lead",
    },
    date: "2025-12-20",
    lastUpdated: "2025-12-22",
    readTime: "15 min",
    category: "Incident Response",
    featured: false,
  },
  {
    id: 6,
    title: "Cloud Security Misconfigurations: Top 10 Mistakes",
    excerpt: "The most common cloud security misconfigurations we encounter and how to avoid them in AWS, Azure, and GCP.",
    author: {
      name: "Jennifer Park",
      credentials: "CCSP",
      role: "Cloud Security Engineer",
    },
    date: "2025-12-15",
    lastUpdated: "2025-12-15",
    readTime: "9 min",
    category: "Cloud Security",
    featured: false,
  },
];

const categories = [
  "All",
  "Threat Intelligence",
  "Technology",
  "Best Practices",
  "Architecture",
  "Incident Response",
  "Cloud Security",
];

const Blog = () => {
  const featuredPosts = blogPosts.filter(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <Newspaper className="w-4 h-4" />
                <span>Security Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insights & <span className="text-gradient-primary">Analysis</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert perspectives on cybersecurity trends, threats, and best practices 
                from the GEM security team.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 0.1}>
                    <Link
                      to={`/blog/${post.id}`}
                      className="group block"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4" />
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <User className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {post.author.name}, {post.author.credentials}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {post.author.role} • {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-bold mb-6">All Articles</h2>
              <StaggerContainer className="space-y-6">
                {regularPosts.map((post) => (
                  <StaggerItem key={post.id}>
                    <Link
                      to={`/blog/${post.id}`}
                      className="group flex flex-col md:flex-row gap-6 glass-panel rounded-xl p-6 hover:border-primary/30 transition-all"
                    >
                      <div className="md:w-48 aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-primary font-medium">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            By {post.author.name}, {post.author.credentials}
                            <span className="mx-2">•</span>
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </div>
                          <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Read more <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GemAssist />
    </div>
  );
};

export default Blog;
