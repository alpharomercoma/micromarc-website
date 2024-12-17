import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0">
            <Image src="/micromarc-icon.svg" alt="MicroMarc Logo" width={40} height={40} className="mr-3" />
            <div>
              <h3 className="text-lg font-bold">MicroMarc Research Group</h3>
              <p className="text-sm text-gray-400">Combating Brain Rot through interdisciplinary research and innovation</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <p className="text-sm text-gray-400">&copy; 2023 MicroMarc Research Group. All rights reserved.</p>
            <p className="text-sm mt-2">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
              <a href="#" className="text-gray-400 hover:text-white ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

