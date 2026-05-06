type VideoPillProps = {
  id?: string;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
    verified?: boolean;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
};

import { formatYouTubeTime, formatYouTubeViews, formatYouTubePostedAt } from "../utils/conversions";
import { MoreVertical } from "lucide-react";
import Button from "./Button";

export default function VideoPill({
  title,
  channel,
  postedAt,
  duration,
  thumbnailUrl,
  views,
}: VideoPillProps) {
  return (
    <div className="md:mb-1.5 p-2 flex flex-col items-start rounded-xl relative transition-transform duration-300 ease-in-out hover:scale-[1.00] origin-center z-0 hover:z-20 hover:bg-gray-100 dark:hover:bg-[#272727] cursor-pointer">
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="rounded-xl w-full h-full block cursor-default">
          <img
            src={thumbnailUrl}
            alt={title}
            className="rounded-xl w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-black text-white rounded px-2 py-0.5 text-[0.75rem] font-semibold absolute right-2 bottom-2">
          {formatYouTubeTime(duration)}
        </div>
      </div>

      <div className="grid gap-3 grid-cols-[auto_1fr] w-full mt-3">
        <div className="w-9 h-9 rounded-full shadow-md overflow-hidden mt-0.5">
          <img
            className="block w-full h-full object-center object-cover"
            src={channel.profileUrl}
          />
        </div>
        <div className="grid grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-semibold w-[98%] text-[0.9rem] text-gray-900 dark:text-white leading-snug">
              {title}
            </h2>
            <div className="flex items-center gap-1 text-[13px] text-gray-600 dark:text-zinc-400 my-0.5">
              <p>{channel.name}</p>
              {channel.verified && (
                <svg
                viewBox="0 0 24 24"
                height="14"
                width="14"
                fill="#3ea6ff"
                style={{ marginLeft: "4px" }}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                  10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 
                  1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"/>
                  </svg>
                )}
                </div>
            <div className="text-gray-500 dark:text-zinc-500 text-[13px] flex items-center gap-1">
              <p>{formatYouTubeViews(views)}</p>
              <p className="font-bold">·</p>
              <p>{formatYouTubePostedAt(postedAt)}</p>
            </div>
          </div>
          <Button size="sm" variant="icon" className="px-1 py-1 h-fit dark:text-white dark:hover:bg-[#272727]">
            <MoreVertical size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}