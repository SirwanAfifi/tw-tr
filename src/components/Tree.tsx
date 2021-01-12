import React from "react";
import { Directory } from "./Dicrectory";
import { File } from "./File";
import { FileIcon } from "../Icons/File";
import { Item } from "./Item";

export const Tree = ({ root }: React.PropsWithChildren<{ root: File }>) => {
  return (
    <ul className="p-2 ml-2 mb-0 pb-0 menu border-l-2 bg-default text-content-700">
      {root.children &&
        root.children.map((item, index) => {
          if (item.children && item.children.length > 0)
            return <Directory key={index} item={item} />;
          return (
            <Item key={index} onClick={(e) => e.stopPropagation()}>
              <span className=" hover:bg-gray-100 transition block p-2 truncate">
                <FileIcon />
                {item.title}
              </span>
            </Item>
          );
        })}
    </ul>
  );
};
