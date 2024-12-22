'use client'

import Link from 'next/link'
import { Button } from "../../components/ui/button"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Budget Homes Private</div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
          <Button className="hidden md:block bg-blue-600 text-white">Get Started</Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/about" className="block text-gray-800 hover:text-blue-600">About</Link>
            <Link href="/services" className="block text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="/projects" className="block text-gray-800 hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="block text-gray-800 hover:text-blue-600">Contact</Link>
            <Button className="w-full bg-blue-600 text-white">Get Started</Button>
          </div>
        )}
      </nav>
    </header>
  )
}

