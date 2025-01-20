import { formatDate, formatPrice, formatRelativeTime } from "@/lib/utils";
import { Job } from "@/types/jobs";
import { CoinsIcon, MapPinIcon, TimerIcon } from "lucide-react";
import { JobApplyDialog } from "@/components/dialog";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  const { title, date, description, location, posted, price, time } = job;

  return (
    <div className="flex flex-col font-sans items-start w-full text-sm gap-4 p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-between w-full items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex flex-col">
          <p className="text-gray-500">{formatDate(date)}</p>
          <p className="text-gray-500">{time}</p>
        </div>
      </div>
      <div className="flex flex-col gap-0 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="flex items-center gap-2">
            <MapPinIcon className="shrink-0 w-4 h-4 text-gray-500" />
            <p className="text-gray-500">{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <TimerIcon className="shrink-0 w-4 h-4 text-gray-500" />
            <p className="text-gray-500">Posted {formatRelativeTime(posted)}</p>
          </div>
          {price > 0 && (
            <div className="flex items-center gap-2">
              <CoinsIcon className="shrink-0 w-4 h-4 text-gray-500" />
              <p className="text-gray-500">{formatPrice(price)}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex flex-col gap-0">
          <p className="font-bold text-gray-500">Description</p>
          <p className="text-gray-500">{description}</p>
        </div>
        <JobApplyDialog job={job} />
      </div>
    </div>
  );
}
