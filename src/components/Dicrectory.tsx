import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { File } from "./File";
import { DirectoryIcon } from "../Icons/Directory";
import { Item } from "./Item";
import { Tree } from "./Tree";

export const Directory = ({
  item,
}: React.PropsWithChildren<{ item: File }>) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Item
      onClick={(e) => {
        e.stopPropagation();
        setToggle(!toggle);
      }}
    >
      <span className=" hover:bg-gray-100 transition block p-2 truncate">
        <DirectoryIcon />
        {item.title}
      </span>
      <Transition
        show={toggle}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Tree root={item} />
      </Transition>
    </Item>
  );
};
