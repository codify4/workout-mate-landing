import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import { Meteors } from './magicui/meteors'
import { Waitlist } from './waitlist'

const CTA = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 text-white">
            <Meteors number={50} />
            <div className="container relative z-10 mx-auto px-4 text-center">
                <BlurFade>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your body?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Download our app today and invest in yourself.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Waitlist className="hidden md:flex rounded-full bg-white text-black hover:bg-white/90 py-6 px-10 w-[170px] transition-all duration-300" />
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}

export default CTA