import Image from "next/image";
import { cn } from "@/lib/cn";

export function ProjectVisual({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("project-visual relative aspect-[9/16] w-full max-h-[420px] bg-[#2e6ea8]", className)}>
      <Image
        src={image}
        alt={alt}
        fill
        className="project-media object-contain"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
