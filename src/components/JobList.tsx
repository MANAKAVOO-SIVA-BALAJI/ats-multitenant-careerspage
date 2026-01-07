"use client";
import { useState } from "react";
import { Job } from "../data/tenant";
import { JobCard } from "./JobCard";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

interface JobListProps {
  jobs: Job[];
}

export const JobList = ({ jobs }: JobListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.department && job.department.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search for roles, locations, or departments..."
          className="pl-10 py-6 text-lg bg-card border-input focus:ring-primary focus:border-primary rounded-xl shadow-sm hover:shadow-md transition-shadow placeholder:text-muted-foreground text-foreground"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/50 rounded-3xl border border-dashed border-border">
          <div className="mx-auto h-12 w-12 text-muted-foreground mb-4">
            <Search className="h-full w-full opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-foreground">No jobs found</h3>
          <p className="mt-1 text-muted-foreground">
            We couldn't find any positions matching "{searchTerm}".
          </p>
        </div>
      )}
    </div>
  );
};
