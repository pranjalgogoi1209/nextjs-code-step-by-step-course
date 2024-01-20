"use client";
import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName != "/login/login-admin" ? (
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href={"/login/login-user"}>Login user</Link>
            </li>
            <li>
              <Link href={"/login/login-admin"}>Login admin</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <Link href={"/"}>Home</Link>
      )}

      {children}
    </div>
  );
}
