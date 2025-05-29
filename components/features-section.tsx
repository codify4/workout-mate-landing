import Image from "next/image"
import { BlurFade } from "./magicui/blur-fade"
import { features } from "@/constants/features"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-red-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-3/4 left-1/2 w-[250px] h-[250px] rounded-full bg-purple-500/10 blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <BlurFade className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-white/20 text-white/80 bg-white/5">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by AI Technology
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
            Revolutionary Fitness Features
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Experience the future of fitness tracking with AI-powered insights, comprehensive analytics, and
            personalized coaching that adapts to your unique fitness journey.
          </p>
        </BlurFade>

        <div className="flex flex-col items-center justify-center gap-20 md:gap-32 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-12 md:gap-16",
                  index % 2 === 1 ? "lg:flex-row-reverse" : "",
                )}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <div className="relative group">

                    <div className="relative rounded-[40px] overflow-hidden border-8 border-zinc-800/50 shadow-2xl max-w-sm mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950">
                      <Image
                        src={feature.imgSrc || "/home.png"}
                        alt={`${feature.title} - Workout Mate App Feature`}
                        width={400}
                        height={680}
                        className="object-cover"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Floating stats badge */}
                    <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-2xl shadow-lg border border-red-400/20">
                      <div className="text-xl font-bold">{feature.stats.number}</div>
                      <div className="text-xs opacity-90">{feature.stats.label}</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-start gap-3">
                      <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">{feature.title}</h3>
                        <p className="text-lg text-red-400 font-medium">{feature.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-white/80 leading-relaxed">{feature.description}</p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 cursor-default hover:bg-white/10 transition-all duration-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/90 text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
