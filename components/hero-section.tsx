import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"


import img from '../public/modern-tech-dashboard.png'

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="text-primary block">Media Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Eezdra empowers creators with cutting-edge AI tools and automation solutions for seamless content
                creation and media management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-2xl group">
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-2xl">
              <Image
                src={img}
                alt="Eezdra Platform Interface"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
              <div className="text-sm font-semibold">AI Powered</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground p-4 rounded-2xl shadow-lg border">
              <div className="text-sm font-semibold">Real-time Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
