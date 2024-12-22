import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Budget Homes Private
        </h1>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="Team Photo"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Budget Homes Private was born from a vision to
              make quality home ownership accessible to all. We recognized the
              growing need for affordable housing solutions that don&apos;t
              compromise on quality or design.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we&apos;ve refined our processes, embraced innovative
              construction techniques, and built a team of dedicated
              professionals. Our journey has been marked by the smiles of
              countless families stepping into their dream homes.
            </p>
            <p className="text-gray-600">
              Today, with over 1000 homes built, we continue our mission to
              provide cost-effective, high-quality housing solutions. We believe
              that everyone deserves a place to call home, and we&apos;re committed
              to making that a reality.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Affordability</h3>
              <p className="text-gray-600">
                We strive to make home ownership accessible through
                cost-effective solutions without compromising on quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain high standards in our materials and construction
                processes to ensure durable and safe homes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                We put our customers first, ensuring their needs and preferences
                are at the heart of every decision.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">1. Understand</h3>
              <p className="text-gray-600 mb-4">
                We begin by understanding your needs, preferences, and budget
                constraints to tailor our solutions accordingly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. Design</h3>
              <p className="text-gray-600 mb-4">
                Our expert designers create cost-effective yet appealing home
                designs that maximize space and functionality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. Build</h3>
              <p className="text-gray-600 mb-4">
                Our skilled construction team brings the design to life,
                adhering to strict quality standards and timelines.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">4. Deliver</h3>
              <p className="text-gray-600 mb-4">
                We hand over your dream home on time, ensuring all finishes are
                perfect and you&apos;re completely satisfied.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg"
                alt="CEO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg"
                alt="COO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Chief Operations Officer</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg"
                alt="Chief Architect"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p className="text-gray-600">Chief Architect</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
