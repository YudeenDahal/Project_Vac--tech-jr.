import { Building2, Target, Users } from "lucide-react";
import HodCard from "../components/HodCard.tsx";

export default function AboutSection() {
  // ---------- DATA ----------
  const hodMembers = [
    {
      name: "Rishab Thapa",
      role: "President",

      image: "./src/assets/rishab.jpg",
    },
    {
      name: "Alshan Rijal",
      role: "Vice President",

      image: "./src/assets/vicepresident.jpg",
    },
    {
      name: "Sajib Katuwal",
      role: "Vice President",
      image: "./src/assets/techhead.jpg",
    },
    {
      name: "Keshab Chauhan",
      role: "Treasurer",

      image: "./src/assets/creativelead.jpg",
    },
    {
      name: "Romin Ban",
      role: "Secretary",

      image: "./src/assets/eventcoord.jpg",
    },
    {
      name: "Swikar Dhungel",
      role: "Joint-Secretary",

      image: "./src/assets/eventcoord.jpg",
    },
    {
      name: "Prastuti Niroula",
      role: "Joint-Secretary",

      image: "./src/assets/eventcoord.jpg",
    },
    {
      name: "Krishna Dahal",
      role: "Joint-Treasurer",

      image: "./src/assets/eventcoord.jpg",
    },
  ];

  const committeeHeads = [
    {
      name: "Rashis Dahal ",
      role: "ECA  Head",
      faculty: "Science",
      image: "./src/assets/designhead.jpg",
    },
    {
      name: "Saugat Bhagat",
      role: "Graphics  Head",
      faculty: "Science",
      image: "./src/assets/devhead.jpg",
    },
    {
      name: "Ishan Nepal",
      role: "Coding  Head",
      image: "./src/assets/researchhead.jpg",
    },
    {
      name: "Yubaraj Lamichhane",
      role: "PR Head",

      image: "./src/assets/prhead.jpg",
    },
  ];

  // ---------- COMPONENTS ----------
  const InfoCard = ({
    icon: Icon,
    title,
    desc,
  }: {
    icon: any;
    title: string;
    desc: string;
  }) => (
    <div className="bg-[#1a2f55] rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
      <div className="w-14 h-14 bg-[#254b80] mx-auto mb-4 rounded-full flex items-center justify-center">
        <Icon className="text-[#b3d9ff]" size={24} />
      </div>
      <h4 className="font-semibold text-2xl  mb-2 text-[#b3d9ff]">{title}</h4>
      <p className="text-sm m-auto text-center mt-2 w-[80%] text-gray-300">
        {desc}
      </p>
    </div>
  );

  const HodPyramid = ({ members }: { members: typeof hodMembers }) => {
    const president = members.find((m) => m.role === "President");
    const vicePresidents = members.filter((m) =>
      m.role.includes("Vice President")
    );
    const bottomRow = members.filter(
      (m) => !m.role.includes("President") && !m.role.includes("Vice President")
    );

    return (
      <div className="flex flex-col items-center relative w-full mt-10">
        <div className="flex items-end justify-center gap-4 mb-20 relative w-full max-w-5xl">
          <div className="flex flex-col gap-4 justify-end">
            {vicePresidents.slice(0, 1).map((m, i) => (
              <div key={i} className="transform scale-100">
                <HodCard {...m} />
              </div>
            ))}
          </div>

          <div className="transform m-10 scale-125 z-10">
            {president && <HodCard {...president} />}
          </div>

          <div className="flex flex-col gap-4 justify-end">
            {vicePresidents.slice(1).map((m, i) => (
              <div key={i} className="transform scale-100">
                <HodCard {...m} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 w-full max-w-6xl">
          {bottomRow.map((m, i) => {
            let translateY = "translate-y-0";
            if (i === 0) translateY = "-translate-y-3";
            if (i === bottomRow.length - 1) translateY = "-translate-y-3";

            return (
              <div
                key={i}
                className={`transform ${translateY} transition-transform duration-300`}
              >
                <HodCard {...m} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const CommitteeGrid = ({ members }: { members: typeof committeeHeads }) => (
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((member, i) => (
        <HodCard key={i} {...member} />
      ))}
    </div>
  );

  // ---------- RETURN ----------
  return (
    <section className="min-h-screen w-full bg-[#0a1a33] text-white font-poppins">
      <div className="h-screen flex flex-col justify-center items-center px-6 bg-[#0a1a33]">
        <div className=" w-full h-full rounded-2xl p-10">
          <h3 className="text-5xl font-semibold text-center mb-4 text-[#9cc9ff]">
            Our Story
          </h3>
          <p className="text-center text-gray-300 mb-8 text-base max-w-3xl mx-auto">
            Discover the vision, mission, and essence of VAC Tech Club — the
            community of innovators building the future of technology together.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <InfoCard
              icon={Building2}
              title="About VAC Tech Club"
              desc="VAC Tech Club is a student-driven community dedicated to fostering innovation, creativity, and hands-on learning in the field of technology. The club provides a collaborative environment where students explore emerging technologies, share knowledge, and work together on impactful projects — from web and app development to AI, robotics, and digital design.Through workshops, hackathons, seminars, and mentorship programs, VAC Tech Club aims to bridge the gap between academic learning and real-world tech experience."
            />
            <InfoCard
              icon={Target}
              title="Mission & Vision"
              desc="The VAC Tech Club envisions becoming a vibrant community of innovators and tech enthusiasts who use technology to create meaningful impact. Our mission is to empower students with practical skills, creativity, and teamwork by providing a platform for learning, experimenting, and building real-world solutions. Through workshops, projects, and collaboration, the club aims to bridge the gap between academic knowledge and industry demands—shaping future-ready leaders who innovate with purpose and passion."
            />
            <InfoCard
              icon={Users}
              title="Our Committee"
              desc="
              Coding Committee: Enhances programming and problem-solving skills through workshops, challenges, and projects.
              GD Committee: Builds communication, leadership, and critical thinking via debates and discussions.
              ECA Committee: Organizes creative and team-building activities to strengthen bonds and explore talents.
              PR Committee: Handles branding, promotions, and partnerships to maintain outreach and visibility."
            />
          </div>
        </div>
      </div>

      {/* --- 2nd VH : Head of Department --- */}
      <div className=" m-0 p-0 flex flex-col justify-center items-center font-poppins">
        <div className="max-w-full w-full bg-[#112244] shadow-xl pt-10 gap-5">
          <h3 className="text-5xl font-[900] text-center font-poppins mb-2 text-[#9cc9ff]">
            Head of Department
          </h3>
          <p className="text-center text-gray-300 mb-10 font-thin text-sm">
            Meet the brilliant minds leading our technical, creative, and
            operational divisions.
          </p>

          <div className="mb-12 mt-12">
            <HodPyramid members={hodMembers} />
          </div>

          <h4 className="text-2xl font-semibold text-center mb-6 text-[#b3d9ff]">
            Head of Committees
          </h4>
          <CommitteeGrid members={committeeHeads} />
        </div>
      </div>
    </section>
  );
}
