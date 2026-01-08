import Link from "next/link";
// import { getTenantJobsData, getTenantData } from "../data/data_retrival";
import {fetchTenantData, fetchTenantJobsData} from "../data/data_fetch";
import { JobList } from "../components/JobList";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import { headers } from "next/headers";
// import { notFound } from "next/navigation";
export const runtime = "edge";
export default async function CareersPage() {
  const domain = "docbox";
  // const host = headers().get("host"); // docbox.example.com
  // const subdomain = host?.split(".")[0]; // docbox
  // const tenantData = getTenantData(domain);
  const tenantDataResponse: any = await fetchTenantData();
  const tenantData = tenantDataResponse.data ;

  const jobsResponse: any = await fetchTenantJobsData();
  const jobs = jobsResponse.data?.jobs || []  ;
  const devMode = process.env.NEXT_PUBLIC_DEV_MODE === "true" ; 

  if (!tenantData) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-2  ">
          404
        </h1>
        <h2 className="text-l font-normal mb-2">Page Not Found</h2>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Texture Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#ECEEF3_1px,transparent_1px),linear-gradient(to_bottom,#ECEEF3_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <h1>{devMode ? "Dev" : "Test"}</h1>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 mb-16">

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground drop-shadow-sm">
              {tenantData?.website?.title || "Join Our Team"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              {tenantData?.website?.description || "Build the future with us. Explore our open positions."}
            </p>
            {tenantData?.website?.headerText && (
              <p className="text-muted-foreground">
                {tenantData.website.headerText}
              </p>
            )}
          </div>
        </div>

        <section className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <h2 className="text-3xl font-bold text-foreground tracking-tight flex items-center gap-3">
              Open Positions
              <span className="text-sm font-semibold px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full border border-brand-blue/20">
                {jobs.length}
              </span>
            </h2>
          </div>

          <JobList jobs={jobs} />
        </section>
      </div>
    </main>
  );
}
