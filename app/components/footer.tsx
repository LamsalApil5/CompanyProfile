import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Budget Homes Private</h2>
            <p className="mt-2">Affordable home construction solutions</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
            <Link href="/projects" className="hover:text-blue-400">Projects</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Budget Homes Private. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

