import { useEffect, useRef } from "react";

interface AdSlotProps {
  format?: "horizontal" | "vertical" | "rectangle" | "responsive";
  className?: string;
  slot?: string;
  label?: string;
}

const AdSlot = ({ format = "responsive", className = "", slot = "", label = "Advertisement" }: AdSlotProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In production, this would push to adsbygoogle
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      // AdSense not loaded yet
    }
  }, []);

  const sizeClasses: Record<string, string> = {
    horizontal: "min-h-[90px] w-full",
    vertical: "min-h-[250px] w-[160px] mx-auto",
    rectangle: "min-h-[250px] w-full max-w-[336px] mx-auto",
    responsive: "min-h-[100px] w-full",
  };

  return (
    <div className={`ads-slot my-6 ${className}`} aria-hidden="true">
      <p className="text-[10px] text-muted-foreground text-center mb-1 select-none">{label}</p>
      <div
        ref={adRef}
        className={`bg-muted/30 border border-border/40 rounded-lg flex items-center justify-center overflow-hidden ${sizeClasses[format]}`}
      >
        {/* Replace with actual AdSense code */}
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format === "responsive" ? "auto" : undefined}
          data-full-width-responsive={format === "responsive" ? "true" : undefined}
        />
        {/* Placeholder for development */}
        <span className="text-xs text-muted-foreground/50 select-none">Ad Space</span>
      </div>
    </div>
  );
};

export default AdSlot;
