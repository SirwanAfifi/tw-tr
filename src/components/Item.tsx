import React from 'react'
export const Item = ({
  children,
  ...rest
}: React.PropsWithChildren<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
>) => (
  <li className="cursor-pointer" {...rest}>
    {children}
  </li>
);
