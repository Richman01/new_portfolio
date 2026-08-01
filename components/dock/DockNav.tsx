import { Dock } from "@/components/dock/Dock";
import { MobileNav } from "@/components/dock/MobileNav";

/** Breakpoint-driven, not input-capability-driven: switches on viewport width
 * (Tailwind `sm`) via CSS so it responds to resizing and renders correctly
 * with no client JS or hydration flash. */
export function DockNav() {
  return (
    <>
      <div className="hidden sm:block">
        <Dock />
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </>
  );
}
