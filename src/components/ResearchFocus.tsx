import { Target, Lightbulb, Users, Zap } from 'lucide-react'

const researchGoals = [
  {
    title: "Identify Addictive Patterns",
    description: "Develop algorithms to recognize and classify addictive elements in short-form content.",
    icon: Target,
  },
  {
    title: "Enhance Attention Models",
    description: "Improve existing attention mechanisms to better capture user engagement patterns.",
    icon: Lightbulb,
  },
  {
    title: "Promote Digital Wellbeing",
    description: "Create interventions that encourage healthier digital content consumption habits.",
    icon: Users,
  },
  {
    title: "Optimize Content Delivery",
    description: "Develop systems that balance user engagement with cognitive health considerations.",
    icon: Zap,
  },
]

export default function ResearchFocus() {
  return (
    <section id="research" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Our Research Focus</h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Our mission is to leverage advanced AI techniques to understand and mitigate the negative impacts of addictive short-form content on cognitive function.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchGoals.map((goal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <goal.icon className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

