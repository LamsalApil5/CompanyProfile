
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
     <section className="h-screen flex items-center justify-center snap-start bg-gray-50 animate-fade-in">
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Innovative Tech Solutions</h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-in">Crafting cutting-edge digital experiences through web development, UI/UX design, and graphic solutions</p>
          <Button asChild size="lg" className="w-full sm:w-auto animate-bounce">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center snap-start bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center animate-slide-up">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoom-in">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">We build responsive, high-performance websites tailored to your business needs.</p>
              <Link href="/services" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Creating user-centric designs that drive engagement and enhance user experiences.</p>
              <Link href="/services" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Graphic Design</h3>
              <p className="text-gray-600 mb-4">Delivering visually stunning designs that capture your brand&apos;s identity and vision.</p>
              <Link href="/services" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">App Development</h3>
              <p className="text-gray-600 mb-4">Building scalable and intuitive mobile and web applications to meet your business needs.</p>
              <Link href="/services" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Enhancing your online presence through strategic digital marketing campaigns.</p>
              <Link href="/services" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">IT Consulting</h3>
              <p className="text-gray-600 mb-4">Providing expert IT solutions to help businesses optimize and innovate.</p>
              <Link href="/services" className="text-blue-600 hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center snap-start bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center animate-slide-up">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 gap-8 animate-zoom-in">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-3 mr-4 animate-spin-slow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Creative Solutions</h3>
                <p className="text-gray-600">We blend creativity with technology to deliver unique and effective designs and websites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

