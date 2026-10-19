import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-optimized.webp"
        alt=""
        width={320}
        height={320}
        sizes="40px"
        className="h-10 w-10 object-contain"
        aria-hidden="true"
      />
      <span className="relative top-[6px] font-display text-base font-bold leading-tight tracking-tight sm:text-lg">
        Zum neuen Rathaus
      </span>
    </span>
  );
}
