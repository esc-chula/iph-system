"use client";

import { JobCard, JobConfirmDialog } from "@/components/job-card";
import { mockJobs } from "./mock-jobs";
import { useState } from "react";
import { Job } from "@/types/jobs";

export function JobsList() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section className="flex flex-col items-start w-full justify-items-center gap-8">
      <h2 className="text-2xl font-bold">IPH Jobs Center</h2>

      <div className="flex flex-col gap-2 w-full">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} onSelectJob={setSelectedJob} />
        ))}
      </div>

      {selectedJob && <JobConfirmDialog job={selectedJob} />}
    </section>
  );
}
