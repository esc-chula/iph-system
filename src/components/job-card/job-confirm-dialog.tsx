import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Job } from "@/types/jobs";

export function JobConfirmDialog({ job }: { job: Job }) {
  return (
    <DialogContent className="w-full font-sans rounded-sm">
      <DialogHeader>
        <DialogTitle className="font-semibold">ยืนยันการสมัครงาน</DialogTitle>
        <DialogDescription>
          แน่ใจหรือไม่ที่จะเข้าร่วมงาน{" "}
          <span className="font-semibold">{job?.title}</span>
        </DialogDescription>
      </DialogHeader>

      <DialogClose asChild>
        <Button>ยืนยัน</Button>
      </DialogClose>
    </DialogContent>
  );
}
