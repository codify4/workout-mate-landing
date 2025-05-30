'use client'

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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await addToWaitlist({ name, email });
            toast("You've been added to the waitlist! 💪");
            setOpen(false);
            setName('');
            setEmail('');
        } catch (error) {
            console.error(error);
            toast("Something went wrong.", {
                description: "There was a problem adding you to the waitlist.",
                style: { background: "#ef4444", color: "#fff" }
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className={className}>
                    Join Waitlist
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-neutral-900 border-none">
                <DialogHeader>
                    <DialogTitle className="text-white">Join our waitlist</DialogTitle>
                    <DialogDescription className="text-white/70">
                        We'll notify you when we launch.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full gap-2">
                    <div className="grid flex-1 gap-2 w-full">
                        <Label htmlFor="name" className="sr-only">
                            Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid flex-1 gap-2 w-full">
                        <Label htmlFor="email" className="sr-only">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="bg-white text-black hover:bg-white/90 rounded-lg px-10 py-4">
                        Join
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
