import { JobsList, JobsSearch } from "@/modules/jobs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans max-w-screen-lg mx-auto">
      <JobsSearch />
      <JobsList />
    </div>
  );
}
