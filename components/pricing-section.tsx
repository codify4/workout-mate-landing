"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlurFade } from "@/components/magicui/blur-fade"
import { pricing } from "@/constants/pricing"
import { Waitlist } from "./waitlist"

const PricingSection = () => {
    return (
        <section id="pricing" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-red-500/20 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <BlurFade className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Very Simple Pricing
                    </h2>
                    <p className="text-lg text-white/70">Choose the plan that works best for you</p>
                </BlurFade>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {pricing.map((plan, index) => (
                    <BlurFade key={index} delay={0.2 + index * 0.1}>
                        <motion.div
                            className={cn(
                                "bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl border relative overflow-hidden group transition-all duration-300",
                                plan.popular
                                    ? "border-red-500/50 border-2 shadow-[0_0_30px_rgba(239,68,68,0.15)] md:-translate-y-4"
                                    : "border-zinc-700/50 hover:border-white/30",
                            )}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
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
                            <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                                {plan.price}
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-2"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                    <CheckCircle2
                                        className={cn("h-5 w-5 shrink-0 mt-0.5", plan.popular ? "text-red-500" : "text-white")}
                                    />
                                    <span className="text-white/80">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <Waitlist className={cn(
                                    "w-full rounded-full font-bold tracking-wide text-sm transition-all duration-300 relative overflow-hidden cursor-pointer py-6",
                                    plan.popular
                                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-600/20"
                                        : "bg-gradient-to-r from-white to-white/60 text-black shadow-lg shadow-white/20",
                                )} 
                            />
                        </motion.div>
                    </BlurFade>
                ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection