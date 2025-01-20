import { Button } from "@/components/ui/button";
import { CoinsIcon, MapPinIcon, TimerIcon } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  title: string;
}

export function JobCard({ title }: JobCardProps) {
  return (
    <div className="flex flex-col items-start w-full text-sm gap-4 p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-between w-full items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex flex-col">
          <p className="text-gray-500">12 January 2025</p>
          <p className="text-gray-500">12:00 - 14:00</p>
        </div>
      </div>
      <div className="flex flex-col gap-0 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="flex items-center gap-2">
            <MapPinIcon className="shrink-0 w-4 h-4 text-gray-500" />
            <p className="text-gray-500">ลานเกียร์ คณะวิศวกรรมศาสตร์</p>
          </div>
          <div className="flex items-center gap-2">
            <CoinsIcon className="shrink-0 w-4 h-4 text-gray-500" />
            <p className="text-gray-500">THB 1,000</p>
          </div>
          <div className="flex items-center gap-2">
            <TimerIcon className="shrink-0 w-4 h-4 text-gray-500" />
            <p className="text-gray-500">Posted 2 days ago</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex flex-col gap-0">
          <p className="font-bold text-gray-500">Description</p>
          <p className="text-gray-500">
            ค่ายลานเกียร์เปิดรับสมัครฝ่าย PR แล้ว !!! สนใจสมัครได้ที่ link
            ด้านล่างเลยงับ
          </p>
        </div>
        <Button asChild className="text-base">
          <Link href="/jobs/1" rel="noopener noreferrer">
            สมัคร
          </Link>
        </Button>
      </div>
    </div>
  );
}
