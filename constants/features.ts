import { BarChart, BookOpenText, Brain, Dumbbell } from "lucide-react"

export const features = [
  {
    imgSrc: "/home.png",
    icon: Dumbbell,
    title: "Workout Tracking",
    subtitle: "Comprehensive Fitness Management",
    description:
      "Transform your fitness journey with intelligent workout tracking that adapts to your goals. Monitor weekly progress, target specific muscle groups, and access your complete workout history.",
    highlights: [
      "Weekly progress visualization",
      "Muscle group targeting system",
      "Complete workout history",
      "Performance analytics",
    ],
    stats: { number: "500+", label: "Exercise Variations" },
  },
  {
    imgSrc: "/tips.png",
    icon: BookOpenText,
    title: "Exercise Library",
    subtitle: "Never run out of exercises",
    description:
      "Access our comprehensive exercise database with professional video demonstrations, form tips, and technique guidance. Learn proper form and discover new exercises to keep your workouts fresh and effective.",
    highlights: [
      "HD video demonstrations",
      "Professional form guidance",
      "Exercise variations",
      "Muscle group targeting",
    ],
    stats: { number: "1000+", label: "Exercise Videos" },
  },
  {
    imgSrc: "/stats.png",
    icon: BarChart,
    title: "Advanced Insights",
    subtitle: "Data-Driven Fitness Progress",
    description:
      "Unlock the power of your fitness data with detailed analytics, performance trends, and insightful charts. Track your training focus, monitor consistency, and visualize your transformation journey.",
    highlights: [
      "Performance trend analysis",
      "Training focus distribution",
      "Calendar view tracking",
      "Progress milestone alerts",
    ],
    stats: { number: "15+", label: "Tracking Metrics" },
  },
  {
    imgSrc: "/chatbot.png",
    icon: Brain,
    title: "AI Personal Trainer",
    subtitle: "Your 24/7 Fitness Companion",
    description:
      "Get personalized coaching from our advanced AI assistant MATE. Receive tailored workout recommendations, nutrition advice, recovery tips, and motivation exactly when you need it most.",
    highlights: [
      "Personalized workout plans",
      "Nutrition recommendations",
      "Recovery optimization",
      "24/7 fitness support",
    ],
    stats: { number: "24/7", label: "AI Availability" },
  },
]
