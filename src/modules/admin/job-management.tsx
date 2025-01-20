import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockJobs } from "@/modules/jobs/mock-jobs";
import { JobCard } from "@/components/job-card";

export function JobManagement() {
  return (
    <Dialog>
      <div className="flex flex-col gap-4 font-sans">
        <div className="flex justify-between py-4">
          <h2 className="text-base font-bold">Job Management</h2>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </DialogTrigger>
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

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Job Posting</DialogTitle>
              <DialogDescription>
                Fill in the details for the new job posting.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const jobData = {
                  title: formData.get("title"),
                  department: formData.get("department"),
                  location: formData.get("location"),
                  description: formData.get("description"),
                };
                console.log("New Job:", jobData);
                e.currentTarget.reset();
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" name="title" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" name="department" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
}
