// import tenantData, { Job, TenantData } from '../src/data/tenant';

// export interface TenantProps {
//   tenantSlug: string;
//   tenant: TenantData;
// }

// export function getTenantSlugFromHost(host?: string | null): string {
//   let tenantSlug = 'default';

//   if (host) {
//     const subdomain = host.split('.')[0];
//     if (subdomain && subdomain !== 'localhost' && subdomain !== '127') {
//       tenantSlug = subdomain;
//     } else if (!host.includes('localhost') && !host.includes('127.0.0.1')) {
//       tenantSlug = subdomain || 'default';
//     }
//   } 
//   return tenantSlug;
// }

// export function getTenantDataBySlug(tenantSlug: string): TenantData {
//   return tenantData[tenantSlug] || tenantData.default;
// }

// export function getJobById(tenant: TenantData, jobId: string): Job | undefined {
//   return tenant.jobs.find((job) => job.id === jobId);
// }
