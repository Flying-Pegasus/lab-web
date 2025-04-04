'use client';
import Image from 'next/image';

export default function Research() {
  const researchWorks = [
    {
      title: 'Materials for Decarbonization and Energy Accessibility',
      description: 'Our research focuses on developing sustainable materials for energy applications.',
      image: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
      items: [
        'Battery Accessibility',
        'Energy Accessibility',
        'Sustainable Materials'
      ]
    },
    {
      title: 'AI-Driven Material Discovery',
      description: 'Exploring AI techniques to discover new materials with unique properties.',
      image: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
      items: [
        'Machine Learning Models',
        'High-throughput Screening',
        'Material Property Prediction'
      ]
    },
    {
      title: 'Quantum Computing in Chemistry',
      description: 'Investigating the role of quantum computing in solving complex chemical equations.',
      image: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
      items: [
        'Quantum Algorithms',
        'Molecular Simulations',
        'Chemical Reaction Prediction'
      ]
    },
    {
      title: 'Quantum Computing in Chemistry',
      description: 'Investigating the role of quantum computing in solving complex chemical equations.',
      image: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
      items: [
        'Quantum Algorithms',
        'Molecular Simulations',
        'Chemical Reaction Prediction'
      ]
    },
    {
      title: 'Quantum Computing in Chemistry',
      description: 'Investigating the role of quantum computing in solving complex chemical equations.',
      image: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
      items: [
        'Quantum Algorithms',
        'Molecular Simulations',
        'Chemical Reaction Prediction'
      ]
    },
    {
      title: 'Quantum Computing in Chemistry',
      description: 'Investigating the role of quantum computing in solving complex chemical equations.',
      image: 'https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg',
      items: [
        'Quantum Algorithms',
        'Molecular Simulations',
        'Chemical Reaction Prediction'
      ]
    },
  ];

  return (
    <>
      {/* Research Section */}
      <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
        <div className="space-y-20">
          {researchWorks.map((work, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-16`}
            >
              {/* Research Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={600}
                  height={400}
                  className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
                  priority={index === 0}
                />
              </div>

              {/* Research Details */}
              <div className="md:w-1/2 w-full space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {work.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {work.description}
                </p>
                <ul className="space-y-2">
                  {work.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}