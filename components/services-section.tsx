import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Users, Headphones, Rocket, Shield } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Creative Consulting",
      description:
        "Expert guidance on content strategy, brand development, and creative direction for your media projects.",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions and integrations to meet your specific media technology requirements.",
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs to help your team master our tools and maximize productivity.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance to ensure your projects never miss a beat.",
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "End-to-end project launch assistance, from planning to execution and post-launch optimization.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security solutions and compliance support for enterprise-level media operations.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond our products, we offer comprehensive services to ensure your success in the digital media landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card"
            >
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
