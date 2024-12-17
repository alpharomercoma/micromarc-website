import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About Our Research</h2>
            <p className="text-gray-700 mb-4">
              MicroMarc is a pioneering research group dedicated to combating Brain Rot through an interdisciplinary approach combining Computer Science and Psychology. Our thesis project aims to develop innovative solutions that address the cognitive challenges of the digital age.
            </p>
            <p className="text-gray-700">
              We collaborate with AI experts, tech companies, psychology professionals, and institutions to create cutting-edge interventions and technologies. Our work has the potential to revolutionize how we understand and mitigate the effects of information overload and digital distraction on cognitive function.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/skibidi.png"
                alt="Research visualization"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
