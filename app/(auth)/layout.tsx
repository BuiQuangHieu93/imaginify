import React, { ReactNode } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="layout">{children}</main>;
};

export default layout;
