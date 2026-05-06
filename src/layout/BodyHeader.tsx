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
    <>
      <div className="flex">
        {/* Left Sidebar — desktop only */}
        <div className="hidden md:flex flex-col items-center gap-2 z-10 pt-4 px-2 sticky top-16 h-[calc(100vh-4rem)] w-20 shrink-0 bg-white dark:bg-[#0f0f0f]">
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

        {/* Main Content — takes full width on mobile */}
        <div className="flex-1 w-full min-w-0 overflow-x-hidden px-2 md:px-3 my-2 pb-20 md:pb-2">
          <CategoryPills btns={btns} selected={selected} onSelect={onSelect} />
          <div className="py-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
            {videos.map((obj, id) => (
              <VideoPill key={id} {...obj} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around bg-white dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-[#272727] py-2">
        {sidebarItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveNav(label)}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-1 rounded-xl transition-all duration-150
              ${
                activeNav === label
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-[#aaaaaa]"
              }
            `}
          >
            <Icon size={22} strokeWidth={activeNav === label ? 2.5 : 1.5} />
            <span className="text-[10px] font-medium leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </>
  );
}