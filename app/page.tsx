import { BlurFade } from "@/components/magicui/blur-fade"
import { TestimonialCard } from "@/components/testimonials"
import ScrollAnimation from "@/components/scroll-animation"
import PricingSection from "@/components/pricing-section"
import FeaturesSection from "@/components/features-section"
import NavBar from "@/components/nav-bar"
import FaqSection from "@/components/faq-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <NavBar />

      <ScrollAnimation />
      <FeaturesSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <BlurFade className="text-center max-w-3xl mx-auto mb-16" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-white/70">Join other users on the same journey as you...</p>
          </BlurFade>

          <TestimonialCard />
        </div>
      </section>

      <PricingSection />
      <FaqSection />
      <CTA />
      <Footer />
    </div>
  )
}
