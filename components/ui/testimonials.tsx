import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

export default function Testimonials() {
    return (
        <section className={`py-12 md:py-16 bg-[#FAF9F6] ${playfairDisplay.variable}`}>
            <div className="mx-auto max-w-7xl space-y-6 px-6 md:space-y-8">
                <div className="relative z-10 mx-auto max-w-3xl text-center">
                    <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4" />
                    <h2 className="text-3xl font-bold lg:text-4xl" style={{
                        color: '#A68229',
                        fontFamily: 'var(--font-playfair)'
                    }}>Empowering Students, Acknowledged by Media & Corporates</h2>
                    <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-4 sm:col-span-2 sm:p-5 lg:row-span-2 border-amber-300 bg-linear-to-br from-white via-amber-50/30 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="pb-0">
                            <h3 className="text-lg font-bold" style={{ 
                                color: '#A68229',
                                fontFamily: 'var(--font-playfair)'
                            }}>Saam TV Interview</h3>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-3">
                            {/* Video Embed */}
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/8Dl7Fuxt4Rs"
                                    title="Saam TV Interview"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            <blockquote className="grid grid-rows-[1fr_auto] gap-3">
                                <p className="text-sm text-gray-700 leading-relaxed" style={{
                                    fontFamily: 'system-ui, sans-serif'
                                }}>Featured on Saam TV to share insights on employability skills and industry expectations. Spoke about how students can strengthen their readiness for competitive placement processes.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                                    <Avatar className="size-10 border-2 border-amber-400 ring-2 ring-amber-200">
                                        <AvatarImage
                                            src="/profilee.jpeg"
                                            alt="Prof. Pramod P. Dastoorkar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-amber-100 text-amber-700 font-bold">PD</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-bold text-gray-900 not-italic" style={{
                                            fontFamily: 'var(--font-playfair)'
                                        }}>Prof. Pramod P. Dastoorkar</cite>
                                        <span className="block text-xs font-semibold" style={{ 
                                            color: '#A68229',
                                            fontFamily: 'system-ui, sans-serif'
                                        }}>Media Interview – Saam TV</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2 border-amber-300 bg-linear-to-br from-white via-amber-50/30 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="h-full pt-5">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                                <div>
                                    <h3 className="text-base font-bold mb-2" style={{ 
                                        color: '#A68229',
                                        fontFamily: 'var(--font-playfair)'
                                    }}>MAX Maharashtra Interview</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed" style={{
                                        fontFamily: 'system-ui, sans-serif'
                                    }}>Interviewed by MAX Maharashtra Channel, where he discussed emerging skill trends, placement strategies, and the importance of early career guidance for engineering students.</p>
                                </div>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                                    <Avatar className="size-10 border-2 border-amber-400 ring-2 ring-amber-200">
                                        <AvatarImage
                                            src="/profilee.jpeg"
                                            alt="Prof. Pramod P. Dastoorkar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-amber-100 text-amber-700 font-bold">PD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-bold text-gray-900 not-italic" style={{
                                            fontFamily: 'var(--font-playfair)'
                                        }}>Prof. Pramod P. Dastoorkar</cite>
                                        <span className="block text-xs font-semibold" style={{ 
                                            color: '#A68229',
                                            fontFamily: 'system-ui, sans-serif'
                                        }}>Media Interview – MAX Maharashtra</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="border-amber-300 bg-linear-to-br from-white via-amber-50/30 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="h-full pt-5">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                                <div>
                                    <h3 className="text-base font-bold mb-2" style={{ 
                                        color: '#A68229',
                                        fontFamily: 'var(--font-playfair)'
                                    }}>Zensar RPG Foundation ESD Program</h3>
                                    <p className="text-xs text-gray-700 leading-relaxed" style={{
                                        fontFamily: 'system-ui, sans-serif'
                                    }}>Founder-Coordinator of the Zensar RPG Foundation ESD Program, through which he guided and trained 800+ students in technical and professional skills to enhance employability outcomes.</p>
                                </div>

                                <div className="grid items-center gap-2 grid-cols-[auto_1fr]">
                                    <Avatar className="size-9 border-2 border-amber-400 ring-2 ring-amber-200">
                                        <AvatarImage
                                            src="/profilee.jpeg"
                                            alt="Prof. Pramod P. Dastoorkar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-amber-100 text-amber-700 text-xs font-bold">PD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-xs font-bold text-gray-900 not-italic" style={{
                                            fontFamily: 'var(--font-playfair)'
                                        }}>Prof. Pramod P. Dastoorkar</cite>
                                        <span className="block text-[10px] font-semibold" style={{ 
                                            color: '#A68229',
                                            fontFamily: 'system-ui, sans-serif'
                                        }}>Coordinator – Zensar ESD Program</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed border-amber-300 bg-linear-to-br from-white via-amber-50/30 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="h-full pt-5">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                                <div>
                                    <h3 className="text-base font-bold mb-2" style={{ 
                                        color: '#A68229',
                                        fontFamily: 'var(--font-playfair)'
                                    }}>Persistent Foundation Girls' Scholarship</h3>
                                    <p className="text-xs text-gray-700 leading-relaxed" style={{
                                        fontFamily: 'system-ui, sans-serif'
                                    }}>Chief Coordinator for the Persistent Foundation Girls' Scholarship Program. Facilitated scholarships of ₹40,000/year for 20+ deserving students, along with mentoring and development support.</p>
                                </div>

                                <div className="grid grid-cols-[auto_1fr] gap-2">
                                    <Avatar className="size-9 border-2 border-amber-400 ring-2 ring-amber-200">
                                        <AvatarImage
                                            src="/profilee.jpeg"
                                            alt="Prof. Pramod P. Dastoorkar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback className="bg-amber-100 text-amber-700 text-xs font-bold">PD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900" style={{
                                            fontFamily: 'var(--font-playfair)'
                                        }}>Prof. Pramod P. Dastoorkar</p>
                                        <span className="block text-[10px] font-semibold" style={{ 
                                            color: '#A68229',
                                            fontFamily: 'system-ui, sans-serif'
                                        }}>Coordinator – PSL Girls' Scholarship</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}