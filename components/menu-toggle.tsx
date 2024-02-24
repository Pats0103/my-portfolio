import * as React from "react";
import { FaBars } from "react-icons/fa6";



export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button onClick={toggle}>
    <FaBars className="text-xl"/>
  </button>
);
