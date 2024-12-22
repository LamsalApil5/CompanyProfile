import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      slug: "web-development",
      title: "Web Development",
      description:
        "Crafting high-performance, responsive websites tailored to business needs.",
      features: [
        "Custom web solutions",
        "SEO optimization",
        "E-commerce development",
        "CMS integration",
        "Scalable architectures",
      ],
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging user experiences for web and mobile apps.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Responsive design",
        "Accessibility-focused",
        "Brand identity integration",
      ],
    },
    {
      slug: "app-development",
      title: "App Development",
      description:
        "Building innovative mobile and web applications to drive business growth.",
      features: [
        "Cross-platform development",
        "Performance optimization",
        "API integration",
        "Secure coding practices",
        "Agile development",
      ],
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Enhancing online presence with data-driven marketing strategies.",
      features: [
        "SEO/SEM",
        "Content marketing",
        "Social media campaigns",
        "Email marketing",
        "Analytics & reporting",
      ],
    },
    {
      slug: "graphic-design",
      title: "Graphic Design",
      description:
        "Delivering visually stunning designs that capture your brand's identity and vision.",
      features: [
        "Logo design",
        "Brand identity",
        "Print materials",
        "Digital artwork",
        "Illustrations",
      ],
    },
    {
      slug: "it-consulting",
      title: "IT Consulting",
      description:
        "Providing expert IT solutions to help businesses optimize and innovate.",
      features: [
        "IT strategy",
        "System architecture",
        "Cloud services",
        "Cybersecurity",
        "Technology integration",
      ],
    },
  ];

  // Split the services into two parts
  const firstSectionServices = services.slice(0, 3);
  const secondSectionServices = services.slice(3);

  return (
    <div>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our IT Services</h1>

        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {firstSectionServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md h-screen flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href={`/services/${service.slug}`}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {secondSectionServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md h-screen flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href={`/services/${service.slug}`}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="text-center h-screen flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Looking for a tailored IT solution?
          </h2>
          <p className="text-gray-600 mb-6">
            Let us help you transform your ideas into digital reality.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
