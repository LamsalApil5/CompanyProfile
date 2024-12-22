import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { notFound } from 'next/navigation'

const projects = [
  {
    id: 1,
    slug:"Cozy-Family-Home",
    title: "Cozy Family Home",
    description: "A budget-friendly 3-bedroom home perfect for small families, featuring an open-plan living area and energy-efficient design.",
    image: "/placeholder.svg",
    features: ["3 Bedrooms", "2 Bathrooms", "Open-plan living", "Energy-efficient"],
    details: "This cozy family home is designed with both comfort and affordability in mind. The open-plan living area creates a spacious feel, perfect for family gatherings and entertaining. With three bedrooms and two bathrooms, there's plenty of space for a growing family. The energy-efficient design helps to keep utility costs low, making this an economical choice for budget-conscious homeowners.",
    specifications: [
      { name: "Square Footage", value: "1,500 sq ft" },
      { name: "Lot Size", value: "0.25 acres" },
      { name: "Year Built", value: "2023" },
      { name: "Heating", value: "Forced air, high-efficiency furnace" },
      { name: "Cooling", value: "Central air conditioning" },
      { name: "Flooring", value: "Hardwood and tile" },
    ]
  },
  {
    id: 2,
    slug:"Modern-Starter-Home",
    title: "Modern Starter Home",
    description: "A compact yet stylish 2-bedroom home ideal for first-time buyers, with smart storage solutions and a minimalist design.",
    image: "/placeholder.svg",
    features: ["2 Bedrooms", "1 Bathroom", "Smart storage", "Minimalist design"],
    details: "Our Modern Starter Home is the perfect solution for first-time buyers or small families. Despite its compact size, this home doesn't compromise on style or functionality. The minimalist design creates a clean, contemporary feel, while smart storage solutions ensure that every inch of space is utilized effectively. With two bedrooms and one bathroom, this home provides comfortable living at an affordable price point.",
    specifications: [
      { name: "Square Footage", value: "900 sq ft" },
      { name: "Lot Size", value: "0.15 acres" },
      { name: "Year Built", value: "2023" },
      { name: "Heating", value: "Ductless mini-split system" },
      { name: "Cooling", value: "Ductless mini-split system" },
      { name: "Flooring", value: "Luxury vinyl plank" },
    ]
  },
  {
    id: 3,
    slug:"Eco-Friendly-Bungalow",
    title: "Eco-Friendly Bungalow",
    description: "An environmentally conscious single-story home with solar panels and rainwater harvesting, perfect for sustainable living.",
    image: "/placeholder.svg",
    features: ["2 Bedrooms", "Solar panels", "Rainwater harvesting", "Low-maintenance garden"],
    details: "Our Eco-Friendly Bungalow is designed for those who want to minimize their environmental impact without sacrificing comfort. This single-story home features two bedrooms and incorporates several eco-friendly features. The solar panels provide clean, renewable energy, significantly reducing electricity costs and carbon footprint. The rainwater harvesting system collects and stores rainwater for use in irrigation and non-potable household needs. The low-maintenance garden is designed with native plants that require minimal watering and upkeep.",
    specifications: [
      { name: "Square Footage", value: "1,200 sq ft" },
      { name: "Lot Size", value: "0.2 acres" },
      { name: "Year Built", value: "2023" },
      { name: "Heating", value: "Geothermal heat pump" },
      { name: "Cooling", value: "Geothermal heat pump" },
      { name: "Flooring", value: "Bamboo and recycled glass tile" },
    ]
  },
  {
    id: 4,
    slug:"Multi-Generational-Home",
    title: "Multi-Generational Home",
    description: "A spacious 4-bedroom home designed for multi-generational living, featuring a ground-floor bedroom suite and flexible living spaces.",
    image: "/placeholder.svg",
    features: ["4 Bedrooms", "3 Bathrooms", "Ground-floor suite", "Flexible spaces"],
    details: "Our Multi-Generational Home is thoughtfully designed to accommodate families of all sizes and ages. With four bedrooms and three bathrooms, this spacious home offers plenty of room for everyone. The ground-floor bedroom suite is perfect for elderly family members or those with mobility issues. Flexible living spaces allow for easy customization to suit your family's unique needs, whether that's a home office, playroom, or additional living area.",
    specifications: [
      { name: "Square Footage", value: "2,500 sq ft" },
      { name: "Lot Size", value: "0.3 acres" },
      { name: "Year Built", value: "2023" },
      { name: "Heating", value: "Zoned forced air system" },
      { name: "Cooling", value: "Zoned central air conditioning" },
      { name: "Flooring", value: "Engineered hardwood and carpet" },
    ]
  }
]

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
      
      <div className="mb-12">
        <Image src={project.image} alt={project.title} width={1200} height={800} className="w-full h-auto rounded-lg shadow-md" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <h3 className="text-xl font-bold mb-2">Key Features</h3>
          <ul className="list-disc list-inside mb-6">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
          <p className="text-gray-600">{project.details}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="bg-gray-100 rounded-lg p-6">
            {project.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-300 last:border-b-0">
                <span className="font-semibold">{spec.name}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in This Home?</h2>
        <p className="text-xl text-gray-600 mb-8">Contact us to learn more about this project or to discuss how we can customize it for you.</p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}

