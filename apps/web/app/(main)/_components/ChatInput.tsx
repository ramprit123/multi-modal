import { SendIcon } from "lucide-react";
import React from "react";

export const ChatInputBox = () => {
  return (
<div className="flex flex-col min-h-[calc(100vh-100px)]">
      <div className="flex-1 overflow-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita, est fugit praesentium vel, quibusdam consequatur quasi aperiam, mollitia dolorum laboriosam dolore eum obcaecati laudantium repellendus inventore aliquid quam ullam!
      </div>
      <div className="w-full max-w-2xl mx-auto mt-auto">
        <div className="flex items-center justify-between bg-gray-200 rounded-md border-2 border-blue-500">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent px-4 py-2 focus:outline-none"
          />
          <div className="flex items-center gap-2 m-2">
            <button className="hidden md:block p-2 rounded text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 9 3-3m-3 3 3 3m-3-3h13M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
              </svg>
          </button>
            <button className="hidden md:block p-2 rounded text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
                <line x1="8" x2="16" y1="22" y2="22"/>
              </svg>
            </button>
            <button className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
              <span className="hidden md:block">Send</span>
              <SendIcon className="w-6 h-6 md:hidden" />
            </button>
      </div>
        </div>
      </div>
    </div>
  );
};
