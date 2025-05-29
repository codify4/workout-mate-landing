import { Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="py-12 bg-black text-white">
            <div className="px-20 flex flex-col md:flex-row justify-between items-center">
                <div className="text-white/60 mb-4 md:mb-0">© {new Date().getFullYear()} Workout Mate. All rights reserved.</div>
                <div className="flex gap-4 mb-4 md:mb-0 lg:mr-30">
                    <Link href="https://www.instagram.com/workout_mate1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-105 transition-all duration-300">
                        <Instagram />
                    </Link>
                    <Link href="https://x.com/workout_mate" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:scale-105 transition-all duration-300 mt-0.5">
                        <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="text-white/60 text-sm mt-2 select-all">workout.mate.ai@gmail.com</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer