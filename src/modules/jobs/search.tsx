import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export function JobsSearch() {
  return (
    <section className="flex flex-col items-start w-full justify-items-center gap-8">
      <div className="flex gap-2 items-center w-full">
        <div className="relative w-full">
          <Input placeholder="Search jobs" className="pl-8" />
          <SearchIcon className="absolute top-1/2 left-3 text-zinc-600 w-4 h-4 transform -translate-y-1/2" />
        </div>
        <Button>Search</Button>
      </div>
    </section>
  );
}
