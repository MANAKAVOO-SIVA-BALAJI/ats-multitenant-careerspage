// import { getTenant } from '../lib/get-tenant'  ;
import {getTenant } from '../lib/get-tenant';

export async function fetchTenantData() {
  const tenant = await getTenant();
  console.log("Fetching tenant data for:", tenant);
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_API_URL}/tenant?domain=${tenant}`, {
    cache: 'no-store', // or use your caching strategy
  });
  
  return response.json();
}


export async function fetchTenantJobsData() {
  const tenant = await getTenant();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CLOUDFLARE_API_URL}/tenant/jobs?domain=${tenant}`,
    {
      cache: "no-store",
    }
  );

//   if (!response.ok) {
//     throw new Error(`Failed to fetch jobs for tenant: ${tenant}`);
//   }

  const data = await response.json();

console.log(
  "response from fetchTenantJobsData",
  JSON.stringify(data, null, 2)
);

  return data;
}


export async function fetchJobById(jobId:string){
    const tenant = await getTenant();
    const url = `${process.env.NEXT_PUBLIC_CLOUDFLARE_API_URL}/tenant/job?domain=${tenant}&jobId=${jobId}`;
    console.log("url",url);     
    const response = await fetch(
        url,
        {
          cache: "no-store",
        }
      );
    
    const data = await response.json();
    console.log(
        "response from fetchJobById",
        JSON.stringify(data, null, 2)
      );
    return data.data;    
}

