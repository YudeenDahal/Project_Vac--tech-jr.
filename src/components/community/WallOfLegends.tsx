import { Sparkles, Info } from "lucide-react";

// Mock data for legends
const legends = [
  {
    rank: 1,
    name: "Chris Evans",

    points: 2450,
    avatar: "/avatars/chris.png",
  },
  {
    rank: 2,
    name: "Sarah Day",

    points: 2100,
    avatar: "/avatars/sarah.png",
  },
  {
    rank: 3,
    name: "Mike Chen",

    points: 1980,
    avatar: "/avatars/mike.png",
  },
  {
    rank: 4,
    name: "Liam Harris",

    points: 1850,
    avatar: "/avatars/liam.png",
  },
  {
    rank: 5,
    name: "Olivia Martin",

    points: 1700,
    avatar: "/avatars/olivia.png",
  },
];

const podium = legends.slice(0, 3);
const others = legends.slice(3);

export default function WallOfLegends() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-10 bg-[#102a4e]/50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-[#9cc9ff]">Hall of Fame</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Celebrating our most active and impactful members. Rise through the
            ranks and earn your spot!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex justify-center items-end gap-4">
              {/* 2nd Place */}
              <PodiumMember
                member={podium[1]}
                height="h-64"
                borderColor="border-slate-300"
                medalColor="text-slate-300"
              />
              {/* 1st Place */}
              <PodiumMember
                member={podium[0]}
                height="h-80"
                borderColor="border-yellow-400"
                medalColor="text-yellow-400"
              />
              {/* 3rd Place */}
              <PodiumMember
                member={podium[2]}
                height="h-56"
                borderColor="border-orange-400"
                medalColor="text-orange-400"
              />
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {others.map((member) => (
                <div
                  key={member.rank}
                  className="bg-[#1a2f55] p-4 rounded-lg flex items-center justify-between hover:bg-[#254272] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-xl text-gray-400 w-8 text-center">
                      {member.rank}
                    </span>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-white">{member.name}</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-[#9cc9ff]">
                    {member.points} pts
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1 flex flex-col gap-8">
            <InfoCard
              icon={<Info />}
              title="Rank Info"
              description="Ranks are calculated based on project contributions, event participation, and community support. The more you engage, the higher you climb!"
            />
            <InfoCard
              icon={<Sparkles />}
              title="Perks"
              description="Top-ranked members get exclusive access to workshops, mentorship from industry pros, and special roles in club projects."
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

type LegendMember = {
  rank: number;
  name: string;

  points: number;
  avatar: string;
};

type PodiumMemberProps = {
  member: LegendMember;
  height: string;
  borderColor: string;
  medalColor: string;
};

const PodiumMember = ({
  member,
  height,
  borderColor,
  medalColor,
}: PodiumMemberProps) => (
  <div
    className={`w-1/3 ${height} bg-[#1a2f55] rounded-t-2xl p-4 flex flex-col justify-end items-center text-center border-b-4 ${borderColor} transform hover:-translate-y-3 transition-transform duration-300`}
  >
    <img
      src={member.avatar}
      alt={member.name}
      className="w-20 h-20 rounded-full border-4 border-white mb-3"
    />

    <h4 className="font-bold text-white text-xl">{member.name}</h4>

    <p className={`font-black text-2xl mt-2 ${medalColor}`}>
      {member.points} pts
    </p>
  </div>
);

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const InfoCard = ({ icon, title, description }: InfoCardProps) => (
  <div className="bg-[#1a2f55] p-6 rounded-2xl">
    <div className="flex items-center gap-3">
      <div className="text-[#9cc9ff]">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 mt-3">{description}</p>
  </div>
);
