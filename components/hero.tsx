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

const Hero = () => {
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
    return (
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
                <div className="flex flex-col items-center justify-center gap-16 md:gap-24 w-10/12 mx-auto">
                    {/* Hero Text */}
                    <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="flex flex-col items-center justify-center text-center py-40 lg:py-0 md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Personal Trainer in your pocket
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-white/80 mb-8"
                        >
                            An AI-powered personal trainer that helps you achieve your dream physique.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Button className="rounded-full bg-white text-black hover:bg-white/90 h-12 w-[250px]">
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
                        className="hidden lg:flex relative flex-row gap-5 mx-auto md:mx-0 md:ml-auto w-full"
                    >
                    <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full">
                        <Image
                            src="/home.png"
                            alt="App Screenshot"
                            width={250}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full">
                        <Image
                            src="/exercise-library.png"
                            alt="App Screenshot"
                            width={250}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full">
                        <Image
                            src="/empty-chatbot.png"
                            alt="App Screenshot"
                            width={250}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full">
                        <Image
                            src="/finished-workouts.png"
                            alt="App Screenshot"
                            width={250}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full">
                        <Image
                            src="/workout-screen.png"
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
    )
}

export default Hero