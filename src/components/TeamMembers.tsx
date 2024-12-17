import Image from 'next/image';

const teamMembers = [
  // {
  //   name: "Dr. Jane Doe",
  //   role: "Principal Investigator",
  //   image: "/placeholder.svg?height=150&width=150",
  //   bio: "Expert in AI and Cognitive Psychology",
  // },
  {
    name: "Alpha Romer Coma",
    role: "Machine Learning Engineer",
    image: "/coma.jpg",
    bio: "Specializing in Multi-Modal Deep Learning",
  },
  {
    name: "Marc Olata",
    role: "Project Manager",
    image: "/olata.png",
    bio: "Leading the Brain Rot Detection Project",
  },
  {
    name: "Job Isaac Ong",
    role: "Data Scientist",
    image: "/ong.jpg",
    bio: "Dataset Curation and Analysis",
  },
  {
    name: "Kristoffer Ian Sioson",
    role: "Relations Manager",
    image: "/sioson.png",
    bio: "Building Partnerships with the Industry",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">The MicroMarc Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <Image
                src={"/team-mems" + member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
