import React from "react";
import { Directory } from "./Dicrectory";
import { File } from "./File";
import { FileIcon } from "../Icons/File";
import { Item } from "./Item";

const color_gen = () => Math.floor(Math.random() * 16777215).toString(16);

export const Tree = ({ root }: React.PropsWithChildren<{ root: File }>) => {
  return (
    <ul
      style={{ borderLeftColor: `#${color_gen()}`, borderLeftWidth: 2 }}
      className="p-2 pt-0 ml-2 mb-0 mt-0 pb-0 menu bg-default text-content-700"
    >
      {root.children &&
        root.children.map((item, index) => {
          if (item.children && item.children.length > 0)
            return <Directory key={index} item={item} />;
          return (
            <Item key={index} onClick={(e) => e.stopPropagation()}>
              <span className=" hover:bg-gray-100 transition block pl-0 p-2 truncate">
                <FileIcon />
                {item.title}
              </span>
            </Item>
          );
        })}
    </ul>
  );
};
