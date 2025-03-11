import { FC, ReactNode } from 'react';

const Main: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export default Main;
