import { mockJobs } from "@/modules/jobs/mock-jobs";
import { JobCard } from "@/components/job-card";
import { JobAddDialog } from "@/components/dialog";

export function JobManagement() {
  return (
    <div className="flex flex-col gap-4 font-sans">
      <div className="flex justify-between py-4">
        <h2 className="text-base font-bold">Job Management</h2>
        <JobAddDialog />
      </div>

      <div className="flex justify-between items-center w-full">
        {mockJobs.length === 0 && (
          <div className="text-sm text-muted-foreground">
            No jobs found. Add your first job posting.
          </div>
        )}

        {mockJobs.length > 0 && (
          <div className="flex flex-col gap-4 w-full">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
