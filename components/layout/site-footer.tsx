import React from "react";
import { ModeToggle } from "../mode-toggle";

export default function Footer() {
  return (
    <footer className="w-screen h-10 border-t border-opacity-50 flex flex-row justify-between p-5">
      <h1> &copy; ThisTeam</h1>
      <ModeToggle />
    </footer>
  );
}
