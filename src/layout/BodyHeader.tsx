import CategoryPills from "../components/CategoryPills";
import { btns } from "../assets/data";
import { useState } from "react";
import VideoPill from "../components/VideoPill";
import { videos } from "../assets/data";
import { Home, Zap, PlaySquare, User } from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: Zap, label: "Shorts" },
  { icon: PlaySquare, label: "Subscriptions" },
  { icon: User, label: "You" },
];

export default function BodyHeader() {
  const [selected, onSelect] = useState<string>(btns[0]);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="grid grid-cols-[auto_1fr]">
      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col items-center gap-2 z-999 pt-4 px-2 sticky top-16 h-[calc(100vh-4rem)] w-20 bg-white dark:bg-[#0f0f0f]">
        {sidebarItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveNav(label)}
            className={`flex flex-col items-center justify-center gap-2 w-18 py-4 rounded-xl cursor-pointer transition-all duration-150
              ${
                activeNav === label
                  ? "bg-gray-100 dark:bg-[#272727]"
                  : "hover:bg-gray-100 dark:hover:bg-[#272727]"
              }
            `}
          >
            <Icon size={22} className="text-gray-900 dark:text-white" />
            <span className="text-[10px] font-medium text-gray-900 dark:text-white leading-tight text-center">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="overflow-hidden px-3 my-2 relative z-0">
        <div className="relative">
          <CategoryPills btns={btns} selected={selected} onSelect={onSelect} />
          <div className="video-scroll flex-1 py-4 grid gap-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] overflow-hidden overflow-y-auto relative">
            {videos.map((obj, id) => (
              <VideoPill key={id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}