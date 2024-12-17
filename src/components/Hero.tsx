import Link from 'next/link';
import { Github, Database, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight text-center">
            Recognizing Addictive Short Form Content
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 leading-tight text-center">
            Augmenting Multimodal Deep Learning with Attention Layers
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            MicroMarc: Pioneering research at the Interdisciplinary Study of Computer Science and Psychology to combat Brain Rot and promote healthier environments in the digital age.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="bg-gray-900 text-white py-2 px-6 rounded-full text-center text-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-md"
              >
                Get Involved
              </Link>
              <Link
                href="#research"
                className="bg-white text-gray-900 py-2 px-6 rounded-full text-center text-lg font-semibold hover:bg-gray-100 transition duration-300 border-2 border-gray-900"
              >
                Our Research
              </Link>
            </div>
            <div className="flex justify-center space-x-8">
              {[
                { href: "https://github.com/MicroMarc", icon: Github, label: "GitHub" },
                { href: "https://huggingface.co/MicroMarc", icon: BrainCircuit, label: "Hugging Face" },
                { href: "https://www.kaggle.com/MicroMarc", icon: Database, label: "Kaggle" },
              ].map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-200 p-3 rounded-full group-hover:bg-gray-300 transition duration-300">
                      <link.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
