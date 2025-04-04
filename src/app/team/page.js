// app/team/page.js
import Image from 'next/image';

export default function TeamPage() {
  // Lab members data
  const teamMembers = {
    professor: [
      {
        name: "Dr. Pavan Pujar",
        title: "Principal Investigator",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Materials Science, Energy Storage",
        email: "pavan.cer@iitbhu.ac.in",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quaerat repellendus accusamus expedita dicta  ut nihil similique ab, sit dolor minus voluptates."
      }
    ],
    researchers: [
      {
        name: "Ansh Vardhan",
        title: "Postdoctoral Researcher",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Electrochemical Extraction of MetalsGeological Hydrogen",
        email: "emily.chen@university.edu"
      },
      {
        name: "Mahima bansal",
        title: "Postdoctoral Fellow",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Non-equilibrium Thermodynamics, Heterogeneous Catalysis.",
        email: "raj.patel@university.edu"
      },
      {
        name: "Dr. Raj Patel",
        title: "Postdoctoral Fellow",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Non-equilibrium Thermodynamics, Heterogeneous Catalysis.",
        email: "raj.patel@university.edu"
      },
      {
        name: "Dr. Raj Patel",
        title: "Postdoctoral Fellow",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Non-equilibrium Thermodynamics, Heterogeneous Catalysis.",
        email: "raj.patel@university.edu"
      },
      {
        name: "Dr. Raj Patel",
        title: "Postdoctoral Fellow",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Non-equilibrium Thermodynamics, Heterogeneous Catalysis.",
        email: "raj.patel@university.edu"
      },
      {
        name: "Dr. Raj Patel",
        title: "Postdoctoral Fellow",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Non-equilibrium Thermodynamics, Heterogeneous Catalysis.",
        email: "raj.patel@university.edu"
      },
      {
        name: "Dr. Raj Patel",
        title: "Postdoctoral Fellow",
        major: "BTech in Ceramic Engineer",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Non-equilibrium Thermodynamics, Heterogeneous Catalysis,Applied Mathematics,Applied Mathematics",
        email: "raj.patel@university.edu"
      },
    ],
    alumni: [
      {
        name: "Dr. Emily Chen",
        title: "Postdoctoral Researcher",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Atomic manufacturing in nanomaterials and catalysis,Applied Mathematics,Applied Mathematics,",
        email: "emily.chen@university.edu"
      },
      {
        name: "Dr. Raj Patel",
        title: "Postdoctoral Fellow",
        image: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg",
        research: "Hydrogen Production, Electrochemistry, Applied Mathematics,Applied Mathematics,Applied Mathematics,Applied Mathematics",
        email: "raj.patel@university.edu"
      }
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* Professor Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-200 pb-2">
            Principal Investigator
          </h2>
          <div className="grid md:grid-cols-3 gap-8 bg-white rounded-xl shadow-md p-6">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src={teamMembers.professor[0].image}
                  alt={teamMembers.professor[0].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800">{teamMembers.professor[0].name}</h3>
              <p className="text-blue-600 font-medium mb-2">{teamMembers.professor[0].title}</p>
              <p className="text-gray-600 mb-4">{teamMembers.professor[0].research}</p>
              <p className="text-gray-700 mb-4">{teamMembers.professor[0].bio}</p>
              <a
                href={`mailto:${teamMembers.professor[0].email}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {teamMembers.professor[0].email}
              </a>
            </div>
          </div>
        </section>

        <TeamCategory
          title="Researchers"
          members={teamMembers.researchers}
        />


        {/* Alumini Section */}
        <section className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-200 pb-2">
    Alumni
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
    {teamMembers.alumni.map((person, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4"> {/* Changed to items-center */}
          {/* Circular Profile Image */}
          <div className="flex-shrink-0 w-50 h-50 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src={person.image || "/default-profile.jpg"}
              alt={`${person.name}'s profile`}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          
          
          {/* Text Content */}
          <div className="min-w-0 space-y-1"> {/* Added space-y-1 for consistent spacing */}
            <h3 className="text-lg font-bold text-gray-800 truncate">{person.name}</h3>
            <p className="text-blue-600 text-sm font-medium truncate">{person.title}</p>
            <p className="text-gray-600 text-sm break-words line-clamp-2">{person.current}</p>
            <p className="text-gray-500 text-xs italic break-words line-clamp-2">{person.research}</p>

          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    </div>
  );
}

// Updated TeamCategory component with circular cards
function TeamCategory({ title, members, showYear = false }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-200 pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Circular Profile Image */}
            <div className="relative h-50 w-50 rounded-full overflow-hidden border-4 border-blue-50 mb-4">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Member Details */}
            <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
            <p className="text-blue-600 font-medium">{person.major}</p>
            <p className="text-blue-600 font-medium">{person.title}</p>
            

            {/* ✅ Fixed Text Overflow */}
            <p className="text-gray-600 mt-2 text-sm break-words overflow-hidden max-h-24 line-clamp-3">
              Research: {person.research}
            </p>

            <a
              href={`mailto:${person.email}`}
              className="mt-3 inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              Contact
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
