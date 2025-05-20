import { useState } from "react";
import {
  ArrowIcon,
  EventIcon,
  ShapIcon,
  VoiceIcon,
} from "../_components/icons/channel.jsx";

export default function Sidebar({ initialValues }) {
  const [isChatOpen, setIstChatOpen] = useState(true);
  const [isVoiceOpen, setIsVoiceOpen] = useState(true);

  const channelName = initialValues[0].serverName;
  console.log(initialValues);

  return (
    <div className="w-[30.4rem] text-[var(--hover-bg-color)] border-[var(--hover-bg-color)] border-l border-t rounded-tl-3xl">
      <div className="pl-4 pr-4 w-full h-[47.4px] border-b border-b-black dark:border-b-[var(--hover-bg-color)] hover:bg-blue-50 dark:hover:bg-[var(--channelList-bg-color)] dark:text-white rounded-tl-3xl">
        <button className="w-full h-full leading-[47.4px] flex justify-between items-center text-2xl font-bold">
          <span>{channelName}</span>
          <ArrowIcon width={14} height={14} />
        </button>
      </div>
      <div className="pl-2 pt-2 pb-2 w-full h-[47.4px] border-b border-b-black dark:border-b-[var(--hover-bg-color)] font-semibold">
        <div className="flex gap-2 items-center pl-2 w-full h-full hover:bg-blue-50 dark:hover:bg-[var(--channelList-bg-color)] hover:dark:text-white text-2xl rounded-lg cursor-pointer">
          <EventIcon width={18} height={18} />
          <button>이벤트</button>
        </div>
      </div>
      <div>
        <ul className="pl-4 pr-4 font-semibold">
          <li className="flex gap-2 flex-col">
            <button
              onClick={() => setIstChatOpen((perv) => !perv)}
              className="flex justify-between items-center pt-4 w-full hover:text-black dark:hover:text-white cursor-pointer"
            >
              <span className="block text-xl">채팅 채널</span>
              <div
                className={`ml-2 transition-transform duration-200 ease-in-out ${
                  isChatOpen ? "rotate-0" : "rotate-90"
                }`}
              >
                <ArrowIcon width={12} height={12} />
              </div>
            </button>
            {isChatOpen && (
              <ul className="text-2xl">
                <li className="flex items-center gap-2 h-12 pl-1 w-full hover:bg-blue-50 dark:hover:bg-[var(--channelList-bg-color)] dark:hover:text-white rounded-lg cursor-pointer">
                  <ShapIcon width={18} height={18} />
                  <span>공지</span>
                </li>
                <li className="flex items-center gap-2 h-12 pl-1 w-full hover:bg-blue-50 dark:hover:bg-[var(--channelList-bg-color)] dark:hover:text-white rounded-lg cursor-pointer">
                  <ShapIcon width={18} height={18} />
                  <span>일반</span>
                </li>
              </ul>
            )}
          </li>
          <li className="flex gap-2 flex-col pt-4">
            <button
              onClick={() => setIsVoiceOpen((prev) => !prev)}
              className="pt-4 flex justify-between w-full hover:text-black dark:hover:text-white cursor-pointer"
            >
              <span className="text-xl">음성 채널</span>
              <div
                className={`ml-2 transition-transform duration-200 ease-in-out ${
                  isVoiceOpen ? "rotate-0" : "rotate-90"
                }`}
              >
                <ArrowIcon width={12} height={12} />
              </div>
            </button>
            {isVoiceOpen && (
              <ul className="text-2xl">
                <li className="flex h-12">
                  <div className="flex items-center gap-2 pl-1 w-full hover:bg-blue-50 dark:hover:bg-[var(--channelList-bg-color)] dark:hover:text-white rounded-lg cursor-pointer">
                    <VoiceIcon width={18} height={18} />
                    <span>일반</span>
                  </div>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
