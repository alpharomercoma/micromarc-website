const publications = [
  {
    title: "The Impact of AI on Cognitive Function: A Comprehensive Review",
    authors: "Doe, J., Smith, J., Chen, E.",
    journal: "Journal of Cognitive Science",
    year: 2023,
    doi: "10.1000/journal.cogs.2023.001",
  },
  {
    title: "Digital Wellbeing Interventions: A Meta-Analysis",
    authors: "Johnson, M., Brown, R., Doe, J.",
    journal: "Psychological Science",
    year: 2022,
    doi: "10.1000/journal.psych.2022.005",
  },
  {
    title: "Bridging Computer Science and Psychology: New Methodologies for Studying Brain Rot",
    authors: "Chen, E., Smith, J., Brown, R.",
    journal: "Interdisciplinary Studies in Computer Science and Psychology",
    year: 2023,
    doi: "10.1000/journal.interdis.2023.002",
  },
]

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{pub.title}</h3>
              <p className="text-gray-600 mb-1">{pub.authors}</p>
              <p className="text-gray-600 mb-1">{pub.journal}, {pub.year}</p>
              <p className="text-gray-600">DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{pub.doi}</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

