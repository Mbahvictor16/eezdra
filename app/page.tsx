import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
