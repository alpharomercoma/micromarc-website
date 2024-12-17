import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About Our Research</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              MicroMarc is a pioneering research group dedicated to combating Brain Rot through an interdisciplinary approach combining Computer Science and Psychology. Our thesis project aims to develop innovative solutions that address the cognitive challenges of the digital age.
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
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
    // <section className="bg-white pb-16">
    //   <div className="container mx-auto px-6">
    //     <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
    //       <div>
    //         <h2 className="text-3xl font-bold mb-6 text-gray-900">About MicroMarc</h2>
    //         <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
    //           MicroMarc is a pioneering research group dedicated to combating Brain Rot through an interdisciplinary approach combining Computer Science and Psychology. Our thesis project aims to develop innovative solutions that address the cognitive challenges of the digital age.
    //         </p>
    //         <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
    //           We collaborate with AI experts, tech companies, psychology professionals, and institutions to create cutting-edge interventions and technologies. Our work has the potential to revolutionize how we understand and mitigate the effects of information overload and digital distraction on cognitive function.
    //         </p>
    //       </div>
    //       <div className="mt-6 md:mt-0">
    //         <Image
    //           src={"/skibidi.png"}
    //           alt="Kape ni Rab heritage"
    //           width={600}
    //           height={400}
    //           className="rounded-lg shadow-2xl mx-auto w-full h-auto"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section >
  );
}
