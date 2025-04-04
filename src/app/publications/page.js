export default function PublicationsPage() {
  const publicationsData = { 
    publications: {
      "2025": [
        {
          id: 1,
          title: 'Materials for Decarbonization and Energy Accessibility',
          authors: ["Author One", "Author Two"],
          status: "In preparation"
        },
        {
          id: 2,
          title: 'AI-Driven Material Discovery',
          authors: ["Author Three", "Author Four"],
          status: "Under review",
          journal: "Nature Materials"
        },
        {
          id: 3,
          title: 'AI-Driven Material Discovery',
          authors: ["Author Three", "Author Four"],
          status: "Under review",
          journal: "Nature Materials"
        },
        {
          id: 4,
          title: 'AI-Driven Material Discovery',
          authors: ["Author Three", "Author Four"],
          status: "Under review",
          journal: "Nature Materials"
        },
      ],
      "2024": [
        {
          id: 5,
          title: 'Quantum Computing in Chemistry',
          authors: ["Author Five", "Author Six"],
          journal: "Science",
          doi: "10.1126/science.abc1234"
        },
        {
          id: 6,
          title: 'Quantum Computing in Chemistry',
          authors: ["Author Five", "Author Six"],
          journal: "Science",
          doi: "10.1126/science.abc1234"
        },
        {
          id: 7,
          title: ' Smith, H., Lee, G., Kumar, B., Penn, A., Venturi, V., Gao, Y., Stone, K., Hunt, A., Waluyo, I., Stavitski, E., Yang, W., Abate, I.I. (2024). Towards a Universal Design Principle for Low-Hysteresis High-Valent Redox in Battery Cathodes: Synergizing Cationic Ordered Vacancies with Tunable Metal-Ligand Hybridization. Journal of Material Chemistry A. In Review, DOI: 10.26434/chemrxiv-2024-0jv9z-v3',
          authors: ["Author Five", "Author Six"],
          journal: "Science",
          doi: "10.1126/science.abc1234"
        },
        {
          id: 8,
          title: 'Quantum Computing in Chemistry',
          authors: ["Author Five", "Author Six"],
          journal: "Science",
          doi: "10.1126/science.abc1234"
        },
      ]
    }
  };
  
  const { publications } = publicationsData;
  const years = Object.keys(publications).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Publications List */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {years.map((year) => (
          <div key={year} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              {year}
            </h2>
            
            <ol className="space-y-8">
              {publications[year].map((pub) => (
                <li key={pub.id} className="flex">
                  <div className="flex-shrink-0 mr-4 font-bold text-gray-700">
                    {pub.id}.
                  </div>
                  
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {pub.title}
                    </p>
                    
                    {pub.authors && (
                      <p className="text-sm text-gray-600 mt-1">
                        {pub.authors.join(', ')}
                      </p>
                    )}
                    
                    <div className="mt-2">
                      {pub.status ? (
                        <span className="text-sm text-gray-500">
                          {pub.status}
                        </span>
                      ) : (
                        <>
                          <span className="text-sm text-gray-600">
                            {pub.journal}
                          </span>
                          {pub.doi && (
                            <a 
                              href={pub.link || `https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-800 ml-2"
                            >
                              [DOI]
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
}