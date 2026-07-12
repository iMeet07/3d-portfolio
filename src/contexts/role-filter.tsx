"use client";
import { createContext, useContext, useState } from "react";

export type Track = "all" | "ds-ml" | "backend" | "research";

interface RoleFilterContextType {
  track: Track;
  setTrack: (t: Track) => void;
}

const RoleFilterContext = createContext<RoleFilterContextType>({
  track: "all",
  setTrack: () => {},
});

export const RoleFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [track, setTrack] = useState<Track>("all");
  return (
    <RoleFilterContext.Provider value={{ track, setTrack }}>
      {children}
    </RoleFilterContext.Provider>
  );
};

export const useRoleFilter = () => useContext(RoleFilterContext);
