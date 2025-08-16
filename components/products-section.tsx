import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wand2, Brain, Zap, ArrowRight } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      icon: Wand2,
      title: "Content Creator Pro",
      description:
        "Advanced AI-powered content creation tools with automated editing, smart templates, and real-time collaboration features.",
      features: ["AI Video Editing", "Smart Templates", "Real-time Collaboration", "Cloud Storage"],
      status: "Available Now",
    },
    {
      icon: Brain,
      title: "AI Analytics Suite",
      description:
        "Comprehensive analytics platform with machine learning insights, performance tracking, and predictive content optimization.",
      features: ["ML Insights", "Performance Tracking", "Predictive Analytics", "Custom Reports"],
      status: "Coming Soon",
    },
    {
      icon: Zap,
      title: "Automation Hub",
      description:
        "Streamline your workflow with intelligent automation tools, scheduled publishing, and cross-platform integration.",
      features: ["Workflow Automation", "Scheduled Publishing", "API Integration", "Custom Triggers"],
      status: "Beta Access",
    },
  ]

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Our Product Suite</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of media technology solutions designed to elevate your creative workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-0 bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-2xl">
                    {product.status}
                  </span>
                  <Button variant="ghost" size="sm" className="rounded-2xl group">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
