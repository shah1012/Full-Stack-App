import React, { useEffect, createContext, useState } from "react";

export const darkContext = createContext();
export const DarkProvider = (props) => {
  return <darkContext.Provider>{props.children}</darkContext.Provider>;
};
