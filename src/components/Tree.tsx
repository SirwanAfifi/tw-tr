import React, { useCallback } from "react";
import { Directory } from "./Dicrectory";
import { File } from "./File";
import { FileIcon } from "../Icons/File";
import { Item } from "./Item";
import { useContextMenu } from "../context";

export const Tree = ({ root }: React.PropsWithChildren<{ root: File }>) => {
  const { setShow, setPosition }: any = useContextMenu();
  const color_gen = useCallback(
    () => Math.floor(Math.random() * 16777215).toString(16),
    []
  );
  const onContextMenu = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
      event.stopPropagation();
      event.preventDefault();
      const { currentTarget } = event;
      setShow(true);
      setPosition({
        x: currentTarget.offsetTop,
        y: currentTarget.offsetLeft + 40,
      });
    },
    [setShow, setPosition]
  );

  return (
    <ul
      style={{ borderLeftColor: `#${color_gen()}`, borderLeftWidth: 2 }}
      className="p-2 pt-0 ml-2 mb-0 mt-0 pb-0 menu bg-default text-content-700"
    >
      {root.children &&
        root.children.map((item, index) => {
          if (item.children && item.children.length > 0)
            return (
              <Directory
                key={index}
                item={item}
                setShow={setShow}
                onContextMenu={onContextMenu}
              />
            );
          return (
            <Item
              key={index}
              onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                event.stopPropagation();
                setShow(false);
              }}
              onContextMenu={onContextMenu}
            >
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
