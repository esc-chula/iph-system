import type { Job } from "@/types/jobs";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "ค่ายลานเกียร์ - ฝ่าย PR",
    date: new Date("2025-10-10"),
    time: "10:00 - 14:00",
    location: "คณะวิศวกรรมศาสตร์",
    price: 0,
    posted: new Date(),
    description:
      "ค่ายลานเกียร์เปิดรับสมัครฝ่าย PR แล้ว !!! สนใจสมัครได้ที่ link ด้านล่างเลยงับ",
  },
  {
    id: "2",
    title: "FE Camp - ฝ่าย PR",
    date: new Date("2025-10-10"),
    time: "10:00 - 14:00",
    location: "คณะวิศวกรรมศาสตร์",
    price: 0,
    posted: new Date(),
    description:
      "ค่าย FE เปิดรับสมัครฝ่าย PR แล้ว !!! สนใจสมัครได้ที่ link ด้านล่างเลยงับ",
  },
];
