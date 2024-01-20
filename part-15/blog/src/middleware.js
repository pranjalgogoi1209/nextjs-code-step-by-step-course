import React from "react";
import { NextResponse } from "next/server";

export default function middleware(request) {
  // if client requesting the server any other page except login page then middle ware will redirect them to the login page
  /* if (request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } */
  return NextResponse.redirect(new URL("/login", request.url));
}

// apply middleware in specific route
export const config = {
  matcher: ["/about:path"],
};
