import { JobCard } from "@/components/job-card";

export function JobsList() {
  return (
    <section className="flex flex-col items-start w-full justify-items-center gap-8">
      <h2 className="text-2xl font-bold">IPH Jobs Center</h2>

      <div className="flex flex-col gap-2 w-full">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <JobCard
              key={index}
              title={`ค่ายลานเกียร์ ครั้งที่ 23 - ${index}`}
            />
          ))}
      </div>
    </section>
  );
}
