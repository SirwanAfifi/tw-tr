import React, { useEffect, useState } from "react";
import { useContextMenu } from "../context";
import { State } from "../types/State";

export const ContextMenu = (): JSX.Element => {
  const { show, setShow, position }: State = useContextMenu();

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      event.stopPropagation();
      setShow(false);
    };

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  });

  const style = {
    top: position.x,
    left: position.y,
  };

  return show ? (
    <div
      style={style}
      className="origin-top-right absolute left-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div className="py-1" role="menu">
        <a
          href="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Add
        </a>
      </div>
    </div>
  ) : null;
};
