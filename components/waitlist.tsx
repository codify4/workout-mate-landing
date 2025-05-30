"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import { addToWaitlist } from "@/app/actions/waitlist"
import { toast } from "sonner"

export function Waitlist({ className }: { className?: string }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await addToWaitlist({ name, email })
      toast("You've been added to the waitlist! 💪")
      setOpen(false)
      setName("")
      setEmail("")
    } catch (error) {
      console.error(error)
      toast("Something went wrong.", {
        description: "There was a problem adding you to the waitlist.",
        style: { background: "#ef4444", color: "#fff" },
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200 ${className}`}
        >
          Join Waitlist
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-zinc-900 border border-zinc-800 shadow-2xl">
        <DialogHeader className="space-y-3 text-center">
          <DialogTitle className="text-2xl font-semibold text-white">Join our waitlist</DialogTitle>
          <DialogDescription className="text-zinc-400 text-base">
            Be the first to know when we launch. We&apos;ll send you an exclusive invite.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-zinc-300">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-zinc-600 h-11"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-zinc-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-zinc-600 h-11"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium h-11 text-base transition-all duration-200 rounded-xl"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Joining...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
