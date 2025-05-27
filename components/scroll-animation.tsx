"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Specific scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Hero section animations
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  // Phone position animations - podium effect to aligned
  const centerPhoneY = useTransform(scrollYProgress, [0, 0.3], [0, 0])
  const phone2Y = useTransform(scrollYProgress, [0, 0.3], [80, 0])
  const phone4Y = useTransform(scrollYProgress, [0, 0.3], [80, 0])
  const phone1Y = useTransform(scrollYProgress, [0, 0.3], [160, 0])
  const phone5Y = useTransform(scrollYProgress, [0, 0.3], [160, 0])

  // Overall phone container animations
  const phoneContainerOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0])
  const phoneContainerY = useTransform(scrollYProgress, [0.7, 0.9], [0, 100])

  // Background circle animations
  const circle1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5])
  const circle1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const circle2Scale = useTransform(scrollYProgress, [0, 0.3], [1, 2])
  const circle2Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="bg-black text-white">
      <section ref={heroRef} className="relative flex items-center overflow-hidden py-24 lg:py-50">
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
          <div className="flex flex-col items-center justify-center gap-16 md:gap-24 w-full mx-auto">
            {/* Hero Text */}
            <motion.div
              style={{ opacity: heroTextOpacity, y: heroTextY }}
              className="flex flex-col items-center justify-center text-center py-20 lg:py-0"
            >
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
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                An AI-powered personal trainer that helps you achieve your dream physique.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="https://launch.drip.ma/waitlist/workout-mate" target="_blank">
                  <Button className="rounded-full bg-white text-black hover:bg-white/90 h-12 px-6 w-[250px]">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Phone Mockups Container */}
            <motion.div
              style={{
                opacity: phoneContainerOpacity,
                y: phoneContainerY,
              }}
              className="w-full overflow-hidden px-4"
            >
              {/* Phone Mockups Row */}
              <div className="hidden lg:flex relative flex-row justify-center items-start gap-5 mx-auto w-full">
                {/* Phone 1 - Far Left */}
                <motion.div
                  style={{ y: phone1Y }}
                  className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full"
                >
                  <Image
                      src="/home.png"
                      alt="App Screenshot"
                      width={250}
                      height={500}
                      className="w-full h-auto"
                  />
                </motion.div>

                {/* Phone 2 - Left */}
                <motion.div
                  style={{ y: phone2Y }}
                  className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full"
                >
                  <Image
                      src="/exercise-library.png"
                      alt="App Screenshot"
                      width={250}
                      height={500}
                      className="w-full h-auto"
                  />
                </motion.div>

                {/* Phone 3 - Center (Highest) */}
                <motion.div
                  style={{ y: centerPhoneY }}
                  className="relative z-20 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full"
                >
                  <Image
                      src="/empty-chatbot.png"
                      alt="App Screenshot"
                      width={250}
                      height={500}
                      className="w-full h-auto"
                  />
                </motion.div>

                {/* Phone 4 - Right */}
                <motion.div
                  style={{ y: phone4Y }}
                  className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full"
                >
                  <Image
                      src="/finished-workouts.png"
                      alt="App Screenshot"
                      width={250}
                      height={500}
                      className="w-full h-auto"
                  />
                </motion.div>

                {/* Phone 5 - Far Right */}
                <motion.div
                  style={{ y: phone5Y }}
                  className="relative z-10 rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl w-full"
                >
                  <Image
                      src="/workout-screen.png"
                      alt="App Screenshot"
                      width={250}
                      height={500}
                      className="w-full h-auto"
                  />
                </motion.div>

                {/* Phone decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute z-50 -bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
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
    </div>
  )
}
