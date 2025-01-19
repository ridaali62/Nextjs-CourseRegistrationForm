"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Page() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul className="flex text-3xl font-bold gap-10 justify-center my-10 ">
          <li
            className={`nav-link rounded-[20px] p-2 ${
              pathname === "/form" ? " bg-red-800 " : "  bg-[rgb(14,88,255)] "
            }`}
          >
            <Link href="/form">Register</Link>
          </li>
          <li
            className={`nav-link rounded-[20px] p-2 ${
              pathname === "/admin" ? "   bg-red-800 " : "bg-[rgb(14,88,255)]"
            }`}
          >
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
