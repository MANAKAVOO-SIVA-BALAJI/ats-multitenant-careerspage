import tenantData from "./tenant"

export function getTenantData(domain: string) {
    if (!domain) {
        return tenantData.default;
    }
    const tenant = tenantData[domain];
    if (!tenant) {
        return tenantData.default;
    }
    return tenant;
}


export function getTenantJobsData(domain:string){
    if(!domain){
        return [];
    }
    const jobs = tenantData[domain]
    
    if(!jobs){
        return tenantData.default.jobs || [];
    }
    return jobs.jobs || [];
}


export function getJobById(domain:string, jobId:string){
    if(!domain){
        return null;
    }
    const tenant = tenantData[domain]
    if(!tenant){
        return null;
    }   
    // console.log("JobID ",jobId)
    const job = tenant.jobs.find((job: any) => job.id === jobId);
    // console.log("JOBS,",job)
    if(!job){
        return null;
    }
    return job;
}

