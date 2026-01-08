// // lib/get-tenant.ts
// import { headers } from "next/headers";

// export async function getTenant() {
//   const headersList =await headers();
//   const host = headersList.get("host");

//   console.log("host:", host);

//   // localhost or demo fallback
//   if (!host) return "demo";

//   // demo.localhost:3000 → demo
//   const parts = host.split(".");

//   if (parts.length > 1) {
//     return parts[0]; // subdomain
//   }

//   return "demo";
// }


import { headers } from "next/headers";

export async function getTenant() {
  const headersList = await headers();

  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host");

  if (!host) return "demo";
  console.log("host:", host);

  // remove port if present
  const cleanHost = host.split(":")[0];

  const parts = cleanHost.split(".");

  /**
   * Rule:
   * - tenant.localhost              → tenant
   * - tenant.domain.tld             → tenant
   * - tenant.sub.domain.tld         → tenant
   * - localhost / domain.tld        → demo
   */

  if (parts.length === 1) {
    // localhost OR invalid host
    console.log("Single part host, returning demo");
    return "demo";
  }

  // localhost case: tenant.localhost
  if (parts[parts.length - 1] === "localhost") {
    console.log("Localhost case");
    return parts.length > 1 ? parts[0] : "demo";
  }

  // online domains: need at least subdomain + domain + tld
  if (parts.length >= 3) {
    console.log("Online domain case");
    return parts[0];
  }

  return "demo";
}
