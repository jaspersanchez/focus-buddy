"use client";

import { useState } from "react";
import Avatar from "../Avatar";
import { isObject } from "util";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((state) => !state);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="
            p-1
            border-[1px]
            border-neutral-200
            flex
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            "
      >
        <Avatar />
      </div>
      {isOpen && (
        <div
          className="
                    absolute
                    rounded-xl
                    shadow-md
                    w-48
                    bg-white
                    overflow-hidden
                    right-0
                    top-12
                    text-sm
                    "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
