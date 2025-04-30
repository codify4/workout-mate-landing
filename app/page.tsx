"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, CheckCircle2, ChevronRight, Clock, Dumbbell, MessageSquare, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Import the SectionWrapper component
import SectionWrapper from "@/components/sections-wrapper"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Main scroll progress for the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Specific scroll progress for the hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Hero section animations
  const heroTextOpacity = useTransform(heroScrollProgress, [0, 0.2], [1, 0])
  const heroTextY = useTransform(heroScrollProgress, [0, 0.2], [0, -50])

  // Phone animations
  const phoneScale = useTransform(heroScrollProgress, [0, 0.3], [1, 0.8])
  const phoneOpacity = useTransform(heroScrollProgress, [0, 0.3], [1, 0])
  const phoneY = useTransform(heroScrollProgress, [0, 0.3], [0, 100])
  const phoneRotate = useTransform(heroScrollProgress, [0, 0.3], [0, 10])

  // Background circle animations
  const circle1Scale = useTransform(heroScrollProgress, [0, 0.3], [1, 1.5])
  const circle1Opacity = useTransform(heroScrollProgress, [0, 0.2], [1, 0])
  const circle2Scale = useTransform(heroScrollProgress, [0, 0.3], [1, 2])
  const circle2Opacity = useTransform(heroScrollProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-black" />
            </div>
            <span className="font-bold text-xl">Workout Mate</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/70 hover:text-white">
              Features
            </a>
            <a href="#testimonials" className="text-white/70 hover:text-white">
              Testimonials
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white">
              Pricing
            </a>
            <Button variant="outline" className="rounded-full text-white border-white/20 hover:bg-white/10">
              Sign In
            </Button>
            <Button className="rounded-full bg-white text-black hover:bg-white/90">Download</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#features" className="text-white/70 hover:text-white py-2">
                Features
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white py-2">
                Testimonials
              </a>
              <a href="#pricing" className="text-white/70 hover:text-white py-2">
                Pricing
              </a>
              <Button variant="outline" className="rounded-full w-full text-white border-white/20 hover:bg-white/10">
                Sign In
              </Button>
              <Button className="rounded-full w-full bg-white text-black hover:bg-white/90">Download</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        {/* Decorative circles */}
        <motion.div
          style={{ scale: circle1Scale, opacity: circle1Opacity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-500/10 blur-3xl"
        />
        <motion.div
          style={{ scale: circle2Scale, opacity: circle2Opacity }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Manage your schedule like never before
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-white/80 mb-8"
              >
                The most intuitive and powerful scheduling app for your daily tasks, meetings, and events.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button className="rounded-full bg-white text-black hover:bg-white/90 h-12 px-8">
                  Download App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              style={{
                scale: phoneScale,
                opacity: phoneOpacity,
                y: phoneY,
                rotateZ: phoneRotate,
              }}
              className="relative max-w-xs mx-auto md:mx-0 md:ml-auto"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl">
                <Image
                  src="/home.png"
                  alt="App Screenshot"
                  width={250}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              {/* Phone decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </motion.div>
          <span className="text-sm text-white/50 mt-2">Scroll to explore</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionWrapper className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-white/70">Everything you need to stay organized and productive</p>
          </SectionWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-8 w-8 text-red-500" />,
                title: "Smart Calendar",
                description: "Intelligent scheduling that adapts to your preferences and habits.",
              },
              {
                icon: <Clock className="h-8 w-8 text-red-500" />,
                title: "Time Tracking",
                description: "Monitor how you spend your time and optimize your productivity.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-red-500" />,
                title: "Team Collaboration",
                description: "Share schedules and coordinate meetings effortlessly.",
              },
            ].map((feature, index) => (
              <SectionWrapper
                key={index}
                delay={0.2 + index * 0.1}
                className="bg-zinc-800 p-8 rounded-3xl hover:bg-zinc-700 transition-colors"
              >
                <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </SectionWrapper>
            ))}
          </div>

          <SectionWrapper className="mt-16 text-center" delay={0.4}>
            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
              View All Features
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </SectionWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10M+", label: "Downloads" },
              { number: "4.9", label: "App Store Rating" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <SectionWrapper key={index} delay={0.2 + index * 0.1}>
                <div className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionWrapper className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-white/70">Join thousands of satisfied users who love our app</p>
          </SectionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Product Manager",
                content:
                  "This app has completely transformed how I manage my day. The intuitive interface makes scheduling a breeze.",
              },
              {
                name: "Sarah Williams",
                role: "Freelance Designer",
                content:
                  "As someone who juggles multiple clients, this app has been a lifesaver. I can't imagine working without it now.",
              },
              {
                name: "Michael Chen",
                role: "Entrepreneur",
                content:
                  "The best scheduling app I've ever used. The team collaboration features are particularly impressive.",
              },
            ].map((testimonial, index) => (
              <SectionWrapper
                key={index}
                delay={0.2 + index * 0.1}
                className={cn("bg-zinc-800 p-8 rounded-3xl", index === 1 ? "md:translate-y-8" : "")}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <SectionWrapper className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-white/70">Choose the plan that works best for you</p>
          </SectionWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Monthly",
                price: "$9.99/mo",
                popular: true,
                features: [
                  "Team collaboration",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                  "Dedicated account manager",
                  "Custom branding",
                  "Advanced security",
                  "API access",
                ],
              },
              {
                name: "Yearly",
                price: "$39.99/yr",
                features: [
                  "Team collaboration",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                  "Dedicated account manager",
                  "Custom branding",
                  "Advanced security",
                  "API access",
                ],
              },
            ].map((plan, index) => (
              <SectionWrapper
                key={index}
                delay={0.2 + index * 0.1}
                className={cn(
                  "bg-zinc-900 p-8 rounded-3xl border",
                  plan.popular ? "border-red-500 shadow-lg md:-translate-y-4" : "border-zinc-700",
                )}
              >
                {plan.popular && (
                  <div className="bg-red-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "w-full rounded-full",
                    plan.popular ? "bg-white text-black hover:bg-white/90" : "bg-white text-black hover:bg-white/90",
                  )}
                >
                  Get Started
                </Button>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your scheduling?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Download our app today and experience the difference.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full bg-white text-black hover:bg-white/90 h-12 px-8">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-white text-white hover:bg-white/10 h-12 px-8">
                Contact Sales
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-xl bg-red-500 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl">Scheduler</span>
              </div>
              <p className="text-white/60">
                The most intuitive scheduling app for your daily tasks, meetings, and events.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "FAQ", "Roadmap"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press", "Contact"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Tutorials", "Support", "API", "Community"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">© 2023 Scheduler App. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
