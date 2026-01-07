// lib/get-tenant.ts
import { headers } from "next/headers";

export async function getTenant() {
  const headersList =await headers();
  const host = headersList.get("host");

  console.log("host:", host);

  // localhost or demo fallback
  if (!host) return "demo";

  // demo.localhost:3000 → demo
  const parts = host.split(".");

  if (parts.length > 1) {
    return parts[0]; // subdomain
  }

  return "demo";
}
