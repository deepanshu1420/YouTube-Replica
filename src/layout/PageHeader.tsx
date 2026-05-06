import { Menu, Bell, Plus, Mic, Search, MoveLeft, Moon, Sun } from "lucide-react";
import Button from "../components/Button";
import YouTubeLogo from "../components/YouTubeLogo";
import { useState } from "react";
import myPhoto from "../assets/my-photo.jpg";

type PageHeaderProps = {
  isDark: boolean;
  toggleDark: () => void;
};

export default function PageHeader({ isDark, toggleDark }: PageHeaderProps) {
  const [show, setShow] = useState(true);

  return (
    <div className="z-20 flex items-center justify-between py-3 px-3 gap-3 md:gap-20 sticky top-0 bg-white dark:bg-[#0f0f0f]">
      {show ? (
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="icon" className="dark:text-white dark:hover:bg-[#272727]">
            <Menu />
          </Button>
          <a href="/">
            <YouTubeLogo className="dark:text-white" />
          </a>
        </div>
      ) : (
        <Button
          variant="default-rounded"
          onClick={() => setShow(true)}
          className="dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]"
        >
          <MoveLeft />
        </Button>
      )}

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className={`grow md:max-w-150 gap-2 md:gap-4 ${!show ? "flex" : "hidden md:flex"}`}
      >
        <div className="flex md:grow items-center w-[90%] focus-within:border-[#1c62b9] focus-within:ring-1 focus-within:ring-[#1c62b9] border border-gray-400 dark:border-[#303030] rounded-full overflow-hidden">
          <input
          type="text"
          placeholder="Search"
          className="md:grow w-full h-full outline-none px-4 bg-white dark:bg-[#121212] dark:text-white dark:placeholder-[#aaaaaa]"
          />
          <Button
            type="button"
            className="rounded-r-full border border-gray-400 dark:border-zinc-600 dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]"
            size={show ? "lg" : "md"}
          >
            <Search />
          </Button>
        </div>
        <Button
          type="button"
          variant="default-rounded"
          className="dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]"
        >
          <Mic />
        </Button>
      </form>

      {show && (
        <div className="flex items-center justify-center gap-1 md:gap-2">
          <Button
            variant="icon"
            className="md:hidden dark:text-white dark:hover:bg-[#272727]"
            onClick={() => setShow(false)}
          >
            <Search />
          </Button>

          {/* 🌙 Dark Mode Toggle */}
          <Button
            variant="icon"
            onClick={toggleDark}
            className="dark:text-white dark:hover:bg-[#272727]"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button
            variant="default-rounded"
            size="md"
            className="hidden md:flex items-center dark:bg-[#272727] dark:text-white dark:hover:bg-[#3f3f3f]"
          >
            <Plus />
            <p className="font-medium mx-1">Create</p>
          </Button>

          <Button variant="icon" className="relative hidden md:flex dark:text-white dark:hover:bg-[#272727]">
            <Bell />
            <p className="bg-red-600 text-white rounded-full flex items-center justify-center w-4 text-[11px] h-4 absolute top-0 right-0">
              9+
            </p>
          </Button>

          <a
          href="https://github.com/deepanshu1420"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-8 h-8 shrink-0"
          >
            <img
            src={myPhoto}
            alt="Profile"
            className="w-full h-full object-cover object-[center_11.5%] rounded-full ring-2 ring-transparent group-hover:ring-blue-400 transition-all cursor-pointer"
            />
            <div className="fixed right-2 top-14 opacity-0 group-hover:opacity-100 transition-all duration-200 z-999 pointer-events-none max-w-[calc(100vw-1rem)]">
              <div className="bg-white dark:bg-[#282828] border border-gray-200 dark:border-[#3f3f3f] rounded-xl shadow-xl px-4 py-3 flex flex-col items-center gap-1 min-w-40">
                {/* Avatar inside card */}
                <img
                src={myPhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover object-[center_11.5%] mb-1"
                />
                <p className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  Deepanshu Sharma
                  </p>
                  <p className="text-xs text-gray-500 dark:text-[#aaaaaa] whitespace-nowrap">
                    @deepanshu1420 (GitHub!)
                  </p>
                </div>
              </div>
            </a>
          </div>
          )}
    </div>
  );
}