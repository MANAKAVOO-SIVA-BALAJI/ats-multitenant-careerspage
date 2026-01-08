import Link from "next/link";
import { Job } from "../data/tenant";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-border bg-card shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="p-6 pb-4 relative">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5" />
                {job?.department || "Engineering"}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-2 pb-4 relative">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {job?.type || "Full-time"}
          </span>
          {job?.qualifications[0] && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border">
              {job.qualifications[0]}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-2 relative">
        <Link href={`/${job.id}`} className="w-full">
          <Button className="w-full bg-card text-foreground border border-input hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium group/btn shadow-sm">
            View Position
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
