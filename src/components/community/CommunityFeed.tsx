import {
  Plus,
  MessageCircle,
  ThumbsUp,
  Share2,
  Image,
  BarChart3,
  Trophy,
} from "lucide-react";

// Mock Data for Feed
const feedItems = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "/avatars/jane.png",
    time: "2h ago",
    content:
      "Just pushed the latest updates for the 'CodeStream' project. Check out the new dashboard feature!",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    author: "John Smith",
    avatar: "/avatars/john.png",
    time: "5h ago",
    content:
      "Who's excited for the upcoming hackathon? I've got my thinking cap on! 💡",
    likes: 25,
    comments: 8,
  },
  {
    id: 3,
    author: "Alex Ray",
    avatar: "/avatars/alex.png",
    time: "1d ago",
    content:
      "Struggling with a React hook bug. Can anyone with experience in custom hooks take a look? #help",
    likes: 5,
    comments: 15,
  },
];

export default function CommunityFeed() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center  m-0 px-4 sm:px-5">
      <h2 className="text-6xl m-auto font-bold text-[#9cc9ff]">
        Where Members Connect
      </h2>
      <p className="text-gray-400 mt-2">
        Latest news, events, and highlights from the club.
      </p>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Main Feed Content */}
        <div className="lg:col-span-3">
          {/* Share Box */}
          <div className="bg-[#102a4e] p-4 rounded-2xl flex items-center gap-4 mb-8 shadow-lg">
            <img
              src="/avatars/user.png"
              alt="Your Avatar"
              className="w-12 h-12 rounded-full"
            />
            <input
              type="text"
              placeholder="Share something with your community..."
              className="w-full bg-[#1a2f55] border border-[#3e5a8a] text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
            />
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white p-3 rounded-full transition">
              <Plus size={24} />
            </button>
          </div>

          {/* Member Status Feed */}
          <div className="flex flex-col gap-6">
            {feedItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#102a4e] rounded-2xl p-6 shadow-lg animate-fade-in-up"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-white">{item.author}</p>
                      <span className="text-gray-500 text-sm">
                        · {item.time}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-300">{item.content}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#1a2f55] flex justify-around items-center text-gray-400">
                  <button className="flex items-center gap-2 hover:text-[#5ea4ff] transition">
                    <ThumbsUp size={18} /> {item.likes} Likes
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#5ea4ff] transition">
                    <MessageCircle size={18} /> {item.comments} Comments
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#5ea4ff] transition">
                    <Share2 size={18} /> Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-1 flex flex-col gap-6">
          <button className="w-full flex items-center gap-4 bg-[#1a2f55] hover:bg-[#254272] px-6 py-4 rounded-xl font-semibold transition transform hover:scale-105">
            <Image className="text-[#9cc9ff]" size={24} /> Gallery
          </button>
          <button className="w-full flex items-center gap-4 bg-[#1a2f55] hover:bg-[#254272] px-6 py-4 rounded-xl font-semibold transition transform hover:scale-105">
            <BarChart3 className="text-[#9cc9ff]" size={24} /> Polls
          </button>
          <button className="w-full flex items-center gap-4 bg-[#1a2f55] hover:bg-[#254272] px-6 py-4 rounded-xl font-semibold transition transform hover:scale-105">
            <Trophy className="text-[#9cc9ff]" size={24} /> Leaderboard
          </button>
        </aside>
      </div>
    </section>
  );
}
