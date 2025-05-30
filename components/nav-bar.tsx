"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Waitlist } from './waitlist'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            setIsMenuOpen(false)
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            })
        }
    }
    
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    <span className="font-bold text-xl">Workout Mate</span>
                </div>
    
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#features"
                        className="text-white/70 hover:text-white transition-all duration-300"
                        onClick={(e) => scrollToSection(e, "features")}
                    >
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-white/70 hover:text-white transition-all duration-300"
                        onClick={(e) => scrollToSection(e, "testimonials")}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-white/70 hover:text-white transition-all duration-300"
                        onClick={(e) => scrollToSection(e, "pricing")}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#faq"
                        className="text-white/70 hover:text-white transition-all duration-300"
                        onClick={(e) => scrollToSection(e, "faq")}
                    >
                        FAQ
                    </Link>
                </div>
    
                <Waitlist className="hidden md:flex rounded-full bg-white text-black hover:bg-white/90 py-6 px-10 w-[170px] transition-all duration-300" />
    
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
                        <Link
                            href="#features"
                            className="text-white/70 hover:text-white py-2"
                            onClick={(e) => scrollToSection(e, "features")}
                        >
                            Features
                        </Link>
                        <Link
                            href="#testimonials"
                            className="text-white/70 hover:text-white py-2"
                            onClick={(e) => scrollToSection(e, "testimonials")}
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-white/70 hover:text-white py-2"
                            onClick={(e) => scrollToSection(e, "pricing")}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#faq"
                            className="text-white/70 hover:text-white py-2"
                            onClick={(e) => scrollToSection(e, "faq")}
                        >
                            FAQ
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default NavBar