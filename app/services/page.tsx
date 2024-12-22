import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      slug: "web-development",
      title: "Web Development",
      description: "Crafting high-performance, responsive websites tailored to business needs.",
      features: ["Custom web solutions", "SEO optimization", "E-commerce development", "CMS integration", "Scalable architectures"]
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences for web and mobile apps.",
      features: ["User research", "Wireframing & prototyping", "Responsive design", "Accessibility-focused", "Brand identity integration"]
    },
    {
      slug: "app-development",
      title: "App Development",
      description: "Building innovative mobile and web applications to drive business growth.",
      features: ["Cross-platform development", "Performance optimization", "API integration", "Secure coding practices", "Agile development"]
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description: "Enhancing online presence with data-driven marketing strategies.",
      features: ["SEO/SEM", "Content marketing", "Social media campaigns", "Email marketing", "Analytics & reporting"]
    }
  ]

  return (
    <div className="h-screen container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our IT Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="list-disc list-inside mb-4">
              {service.features.map((feature, i) => (
                <li key={i} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <Button asChild>
              <Link href={`/services/${service.slug}`}>Learn More</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="h-screen text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for a tailored IT solution?</h2>
        <p className="text-gray-600 mb-6">Let us help you transform your ideas into digital reality.</p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
