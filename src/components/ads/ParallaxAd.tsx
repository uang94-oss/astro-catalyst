import { useIsMobile } from "@/hooks/use-mobile";
import AdSlot from "./AdSlot";

interface ParallaxAdProps {
  className?: string;
}

const ParallaxAd = ({ className = "" }: ParallaxAdProps) => {
  const isMobile = useIsMobile();

  // On mobile, render as inline ad (no sticky)
  if (isMobile) {
    return <AdSlot format="rectangle" className={className} label="Sponsored" />;
  }

  return (
    <div className={`ads-parallax relative my-10 ${className}`} aria-hidden="true">
      <div className="ads-inner sticky top-[100px]">
        <AdSlot format="rectangle" label="Sponsored" />
      </div>
    </div>
  );
};

export default ParallaxAd;
