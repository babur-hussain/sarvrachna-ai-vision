import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingChatbot from "@/components/sections/FloatingChatbot";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Zap,
  Brain,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay ahead of the curve in the coming year.",
    author: "Dr. Sarah Chen",
    date: "August 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/placeholder.svg",
    tags: ["Artificial Intelligence", "Business Trends", "Digital Transformation"]
  };

  const posts = [
    {
      id: 1,
      title: "Building Scalable Mobile Apps: Best Practices for 2024",
      excerpt: "Learn the essential strategies and technologies for creating mobile applications that can handle millions of users and scale seamlessly.",
      author: "Marcus Rodriguez",
      date: "August 12, 2024",
      readTime: "6 min read",
      category: "Mobile Development",
      image: "/placeholder.svg",
      tags: ["Mobile Apps", "Scalability", "Best Practices"]
    },
    {
      id: 2,
      title: "E-commerce SEO: Complete Guide to Ranking Higher",
      excerpt: "Master the art of search engine optimization for online stores and increase your organic traffic and sales.",
      author: "Priya Patel",
      date: "August 10, 2024",
      readTime: "10 min read",
      category: "SEO & Marketing",
      image: "/placeholder.svg",
      tags: ["SEO", "E-commerce", "Digital Marketing"]
    },
    {
      id: 3,
      title: "The Rise of No-Code Development: Empowering Non-Developers",
      excerpt: "Explore how no-code platforms are democratizing software development and enabling businesses to build solutions without coding knowledge.",
      author: "David Kim",
      date: "August 8, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "/placeholder.svg",
      tags: ["No-Code", "Development", "Business Tools"]
    },
    {
      id: 4,
      title: "Cybersecurity in 2024: Protecting Your Digital Assets",
      excerpt: "Stay ahead of evolving cyber threats with the latest security practices and technologies for modern businesses.",
      author: "Alex Thompson",
      date: "August 5, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "/placeholder.svg",
      tags: ["Cybersecurity", "Digital Security", "Business Protection"]
    },
    {
      id: 5,
      title: "Cloud Computing Strategies for Small Businesses",
      excerpt: "Discover cost-effective cloud solutions that can transform your small business operations and improve efficiency.",
      author: "Maria Garcia",
      date: "August 3, 2024",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/placeholder.svg",
      tags: ["Cloud Computing", "Small Business", "Digital Transformation"]
    },
    {
      id: 6,
      title: "The Impact of 5G on Mobile App Development",
      excerpt: "How the next generation of mobile networks is revolutionizing app development and user experiences.",
      author: "James Wilson",
      date: "August 1, 2024",
      readTime: "5 min read",
      category: "Mobile Development",
      image: "/placeholder.svg",
      tags: ["5G", "Mobile Apps", "Technology Trends"]
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Mobile Development",
    "Web Development",
    "E-commerce",
    "SEO & Marketing",
    "Security",
    "Cloud Computing"
  ];

  const popularTags = [
    "Artificial Intelligence",
    "Mobile Apps",
    "Web Development",
    "E-commerce",
    "SEO",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Transformation",
    "UI/UX Design",
    "Business Strategy"
  ];

  const newsletter = {
    title: "Stay Updated with Latest Insights",
    description: "Get weekly updates on the latest technology trends, development tips, and business insights delivered to your inbox.",
    subscribers: "5,000+",
    benefits: [
      "Exclusive content and insights",
      "Early access to new features",
      "Expert tips and tutorials",
      "Industry news and updates"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-brand-sky/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-brand-violet/20 rounded-full blur-xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-brand-sky/30 mb-8 animate-fade-in">
              <span className="w-3 h-3 bg-brand-sky rounded-full mr-3 animate-pulse"></span>
              <span className="text-brand-sky font-medium">Our Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Insights &{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Knowledge
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, industry trends, and practical tips 
              from our team of technology professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-sky/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-primary bg-clip-text text-transparent">Article</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and insightful content that's making waves in the industry.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full glass border mb-6">
                  <span className="w-2 h-2 bg-brand-pink rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium">{featuredPost.category}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-brand-sky/10 text-brand-sky rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="hero" size="lg" className="group">
                  <span className="relative z-10">Read Full Article</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 rounded-2xl glass border border-brand-sky/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-brand-sky/10 to-brand-violet/10 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="h-24 w-24 text-brand-sky mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-foreground mb-2">AI Insights</h4>
                      <p className="text-muted-foreground">Future of technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Latest <span className="gradient-primary bg-clip-text text-transparent">Articles</span>
                </h2>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <article key={post.id} className="group p-8 rounded-2xl glass border border-brand-sky/20 hover:border-brand-sky/40 transition-all duration-300 hover:shadow-glow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Post Image */}
                      <div className="md:col-span-1">
                        <div className="w-full h-48 rounded-xl bg-gradient-to-br from-brand-sky/10 to-brand-violet/10 flex items-center justify-center overflow-hidden">
                          <div className="text-center">
                            <BookOpen className="h-16 w-16 text-brand-sky mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Blog Post</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Post Content */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 text-sm bg-brand-sky/10 text-brand-sky rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-brand-sky transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {post.readTime}
                            </div>
                          </div>
                          
                          <Button variant="outline" size="sm" className="group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="hero" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        index === 0
                          ? 'bg-brand-sky text-white'
                          : 'hover:bg-brand-sky/10 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-2 text-sm bg-brand-sky/10 text-brand-sky rounded-full hover:bg-brand-sky/20 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="p-6 rounded-2xl glass border border-brand-sky/20">
                <div className="text-center mb-6">
                  <BookOpen className="h-12 w-12 text-brand-sky mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{newsletter.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{newsletter.description}</p>
                  <div className="text-2xl font-bold text-brand-sky mb-4">{newsletter.subscribers} subscribers</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {newsletter.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-sky rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-brand-sky/30 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky/50"
                  />
                  <Button variant="hero" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-pink/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-brand-cyan/20 rounded-full blur-xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Share Your{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Story?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Have insights to share? We're always looking for guest contributors 
              and industry experts to share their knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="group">
                <span className="relative z-10">Write for Us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <BookOpen className="mr-2 h-5 w-5" />
                View Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Blog;
