import { useState } from "react";
import type { ReactNode } from "react";
import { Sparkles, Info, Crown } from "lucide-react";
import { InfoModal } from "./InfoModal";
import { RanksTable, XpFormulaInfo } from "./RankSystem";
import CountUp from "react-countup";

// Mock data for legends
const legends = [
  { rank: 1, name: "Chris Evans", points: 2450, avatar: "/avatars/chris.png" },
  { rank: 2, name: "Sarah Day", points: 2100, avatar: "/avatars/sarah.png" },
  { rank: 3, name: "Mike Chen", points: 1980, avatar: "/avatars/mike.png" },
  { rank: 4, name: "Liam Harris", points: 1850, avatar: "/avatars/liam.png" },
  {
    rank: 5,
    name: "Olivia Martin",
    points: 1700,
    avatar: "/avatars/olivia.png",
  },
];

// --- TYPE DEFINITIONS ---
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
type InfoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
};

// --- REUSABLE COMPONENTS (defined within this file) ---
const PodiumMember = ({
  member,
  height,
  borderColor,
  medalColor,
}: PodiumMemberProps) => (
  <div
    className={`w-1/3 ${height} bg-[#1a2f55] rounded-t-2xl p-1 flex flex-col justify-end items-center text-center border-b-4 ${borderColor} transform hover:-translate-y-3 transition-transform duration-300`}
  >
    <h1
      className={`flex items-center justify-center gap-2 font-bold pb-5 px-6 py-3 ${
        member.rank === 1
          ? " text-yellow-500 text-5xl pb-5 shadow-yellow-400/60"
          : member.rank === 2
          ? " text-gray-200 text-2xl shadow-gray-400/60"
          : " text-amber-700 text-xl shadow-orange-500/60"
      }`}
    >
      {member.rank === 1 && (
        <Crown className="w-10 h-10 text-yellow-500" strokeWidth={2.5} />
      )}
      {member.rank === 2 && (
        <Crown className="w-6 h-6 text-gray-200" strokeWidth={2.5} />
      )}
      {member.rank === 3 && (
        <Crown className="w-6 h-6 text-amber-700" strokeWidth={2.5} />
      )}
      {member.rank === 1 ? "1st" : member.rank === 2 ? "2nd" : "3rd"}
    </h1>
    <img
      src={member.avatar}
      alt={member.name}
      className="w-20 h-20 rounded-full border-4 border-white mb-3"
    />
    <h4 className="font-bold text-white text-xl">{member.name}</h4>
    <p className={`font-black text-xl ${medalColor}`}>
      <CountUp end={member.points} duration={3} /> pts
    </p>
  </div>
);

const InfoCard = ({ icon, title, description, onClick }: InfoCardProps) => (
  <button onClick={onClick} className="w-full text-left h-full">
    <div className="bg-[#1a2f55] p-6 rounded-2xl h-full transition-colors duration-300 hover:bg-[#254272] cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="text-[#9cc9ff]">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mt-3">{description}</p>
    </div>
  </button>
);

const podium = legends.slice(0, 3);
const others = legends.slice(3);

// --- MAIN COMPONENT ---
export default function WallOfLegends() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<"ranks" | "xp" | null>(null);

  const handleOpenModal = (title: string, content: "ranks" | "xp") => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-10 bg-[#102a4e]/50">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-[#9cc9ff]">Hall of Fame</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Celebrating our most active and impactful members. Rise through
              the ranks and earn your spot!
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex justify-center items-end gap-4">
                <PodiumMember
                  member={podium[1]}
                  height="h-64"
                  borderColor="border-slate-300"
                  medalColor="text-slate-300"
                />
                <PodiumMember
                  member={podium[0]}
                  height="h-80"
                  borderColor="border-yellow-400"
                  medalColor="text-yellow-400"
                />
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
                      <p className="font-semibold text-white">{member.name}</p>
                    </div>
                    <p className="font-bold text-lg text-[#9cc9ff]">
                      <CountUp end={member.points} duration={2}></CountUp> pts
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1 flex flex-col gap-8">
              <InfoCard
                icon={<Info />}
                title="Rank & Perk Info"
                description="Ranks are based on a gamified XP system. Click to see the full rank ladder, points required, and the perks you can unlock."
                onClick={() => handleOpenModal("Rank & Perk System", "ranks")}
              />
              <InfoCard
                icon={<Sparkles />}
                title="XP Formula"
                description="Learn how you can earn XP by participating in events, contributing to projects, and helping the community. Click for the breakdown."
                onClick={() => handleOpenModal("XP Earning Formula", "xp")}
              />
            </aside>
          </div>
        </div>
      </section>

      {/* MODAL COMPONENT RENDERED HERE */}
      <InfoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
      >
        {modalContent === "ranks" && <RanksTable />}
        {modalContent === "xp" && <XpFormulaInfo />}
      </InfoModal>
    </>
  );
}
