import { useState } from "react";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileStickyAd = () => {
  const [dismissed, setDismissed] = useState(false);
  const isMobile = useIsMobile();

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg" aria-hidden="true">
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-8 right-2 bg-background border border-border rounded-t-md px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close ad"
      >
        <X className="w-3.5 h-3.5" />
      </button>
      <div className="flex items-center justify-center p-2 min-h-[50px] bg-muted/20">
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot=""
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <span className="text-[10px] text-muted-foreground/50 select-none">Ad Space</span>
      </div>
    </div>
  );
};

export default MobileStickyAd;
