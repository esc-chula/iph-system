"use client";

import { JobCard } from "@/components/job-card";
import { mockJobs } from "./mock-jobs";

export function JobsList() {
  return (
    <section className="flex flex-col items-start w-full justify-items-center gap-8">
      <h2 className="text-2xl font-bold">IPH Jobs Center</h2>

      <div className="flex flex-col gap-2 w-full">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
