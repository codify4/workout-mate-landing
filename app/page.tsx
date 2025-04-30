"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BarChart, Book, BookOpenText, Brain, Calendar, CheckCircle2, ChevronRight, Clock, Dumbbell, Icon, Menu, MessageSquare, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Meteors } from "@/components/magicui/meteors"
import { Marquee } from "@/components/magicui/marquee"
import { TestimonialCard } from "@/components/testimonials"

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
            <Link href="#features" className="text-white/70 hover:text-white">
              Features
            </Link>
            <Link href="#testimonials" className="text-white/70 hover:text-white">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-white/70 hover:text-white">
              Pricing
            </Link>
            <Button className="rounded-full bg-white text-black hover:bg-white/90">Download</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-white" />
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
              <Link href="#features" className="text-white/70 hover:text-white py-2">
                Features
              </Link>
              <Link href="#testimonials" className="text-white/70 hover:text-white py-2">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-white/70 hover:text-white py-2">
                Pricing
              </Link>
              <Button className="rounded-full w-full bg-white text-black hover:bg-white/90">Download</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center overflow-hidden py-10">
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
      <section id="features" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <BlurFade className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-white/70">Discover the key functionalities of Workout Mate</p>
          </BlurFade>

          <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
            {[
              {
                imgSrc: "/home.png",
                icon: Dumbbell,
                title: "Workouts",
                description: "Track your weekly progress, target muscle groups, and view past workouts.",
              },
              {
                imgSrc: "/tips.png",
                icon: BookOpenText,
                title: "Exercise Library & Tips",
                description: "Explore a comprehensive exercise library and watch suggestion videos for guidance.",
              },
              {
                imgSrc: "/stats.png",
                icon: BarChart,
                title: "Detailed Statistics",
                description: "Analyze your performance with insightful stats, training focus charts, and a calendar view.",
              },
              {
                imgSrc: "/chatbot.png",
                icon: Brain,
                title: "AI Assistant",
                description: "Get personalized advice on nutrition, workouts, and more from your AI mate.",
              },
            ].map((feature, index) => (
              <BlurFade
                key={index}
                delay={0.2 + index * 0.1}
              >
                <div
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-8 md:gap-12",
                    index % 2 === 1 ? "md:flex-row-reverse" : "",
                  )}
                >
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-[400px] h-[700px] max-w-xs mx-auto">
                      <Image
                        src={feature.imgSrc}
                        alt={feature.title}
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                      <feature.icon color="white" size={28} />
                      <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-white/70">{feature.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

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

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-red-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <BlurFade className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Simple, Transparent Pricing</h2>
            <p className="text-lg text-white/70">Choose the plan that works best for you</p>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Monthly",
                price: "$9.99/mo",
                popular: false,
                features: [
                ],
              },
              {
                name: "Yearly",
                price: "$39.99/yr",
                features: [
                ],
              },
            ].map((plan, index) => (
              <BlurFade
                key={index}
                delay={0.2 + index * 0.1}
              >
                <motion.div 
                  className={cn(
                    "bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border relative overflow-hidden group transition-all duration-300",
                    plan.popular 
                      ? "border-red-500/50 border-2 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:-translate-y-4" 
                      : "border-zinc-700/50 hover:border-white/30"
                  )}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-950/50 pointer-events-none" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] group-hover:animate-shine opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full inline-block mb-4 shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        <CheckCircle2 className={cn(
                          "h-5 w-5 shrink-0 mt-0.5",
                          plan.popular ? "text-red-500" : "text-white"
                        )} />
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "w-full rounded-full font-bold tracking-wide text-sm transition-all duration-300 relative overflow-hidden cursor-pointer py-6",
                      plan.popular 
                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-600/20" 
                        : "bg-gradient-to-r from-white to-white/60 text-black shadow-lg shadow-white/20"
                    )}
                  >
                    Download App
                    <ChevronRight className="ml-1 h-4 w-4 inline animate-pulse" />
                  </Button>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-32 text-white">
        <Meteors number={50} />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <BlurFade>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your scheduling?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Download our app today and invest in yourself.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full bg-white text-black hover:bg-white/90 h-12 px-20 cursor-pointer">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 text-white">
          <div className="px-20 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">© {new Date().getFullYear()} Workout Mate. All rights reserved.</div>
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
      </footer>
    </div>
  )
}
