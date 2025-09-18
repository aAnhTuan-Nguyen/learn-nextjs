import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 border-b border-solid border-black/[.08] dark:border-white/[.145]">
      <ul className="flex gap-4 items-center">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
