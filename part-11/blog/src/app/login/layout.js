"use client";
import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className={styles.navbar}>
      {pathName !== "/login/login-admin" ? (
        <ul>
          <li>
            <Link href={"/login/login-user"}>Login user</Link>
          </li>
          <li>
            <Link href={"/login/login-admin"}>Login admin</Link>
          </li>
          <li>
            <Link href={"/login/login-teacher"}>Login Teacher</Link>
          </li>
        </ul>
      ) : (
        <Link href={"/"}>Home</Link>
      )}

      {children}
    </nav>
  );
}
