import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">About Eezdra</h2>
              <p className="text-xl text-muted-foreground">
                We&pos;re pioneering the future of media technology, empowering creators and businesses with innovative
                AI-driven solutions that transform how content is created, managed, and distributed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize advanced media technology and make professional-grade content creation accessible to
                    everyone, from individual creators to enterprise teams.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where creativity knows no bounds, where technology seamlessly enhances human imagination,
                    and where every story can be told with professional quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Values */}
          <div className="space-y-8">
            <Card className="rounded-2xl shadow-lg border-0 bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription>
                  Trusted by leading brands and recognized by industry experts for innovation in media technology.
                </CardDescription>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Awards Won</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="rounded-2xl shadow-lg border-0 bg-card text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="rounded-2xl shadow-lg border-0 bg-card text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
