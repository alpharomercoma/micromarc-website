import Image from 'next/image'

const companies = [
  { name: "TechCorp", logo: "/placeholder.svg?height=100&width=200" },
  { name: "AI Innovations", logo: "/placeholder.svg?height=100&width=200" },
  { name: "PsychTech", logo: "/placeholder.svg?height=100&width=200" },
  { name: "NeuroSoft", logo: "/placeholder.svg?height=100&width=200" },
]

const experts = [
  { name: "Dr. Sarah Johnson", title: "Cognitive Neuroscientist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Prof. David Lee", title: "AI Researcher", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dr. Maria Garcia", title: "Clinical Psychologist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dr. Alex Wong", title: "Machine Learning Specialist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dr. Robert Chen", title: "Developmental Psychologist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dr. Sophia Rodriguez", title: "Natural Language Processing Expert", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dr. Emily Patel", title: "Social Psychologist", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dr. Michael Zhang", title: "Computer Vision Researcher", image: "/placeholder.svg?height=100&width=100" },
]

export default function Collaborators() {
  return (
    <section id="collaborators" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Collaborators</h2>
        
        <h3 className="text-2xl font-semibold mb-8 text-gray-800">Partner Companies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-100 rounded-lg">
              <Image
                src={company.logo}
                alt={company.name}
                width={200}
                height={100}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-gray-800">Expert Advisors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
              <Image
                src={expert.image}
                alt={expert.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900">{expert.name}</h4>
              <p className="text-sm text-gray-700 text-center">{expert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

