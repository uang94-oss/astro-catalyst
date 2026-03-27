import { Facebook, Twitter, MessageCircle, Send } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, label: "Facebook", color: "hover:bg-[#1877F2] hover:text-white" },
    { icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`, label: "Twitter", color: "hover:bg-[#1DA1F2] hover:text-white" },
    { icon: MessageCircle, href: `https://wa.me/?text=${encodedTitle}%20${encoded}`, label: "WhatsApp", color: "hover:bg-[#25D366] hover:text-white" },
    { icon: Send, href: `https://t.me/share/url?url=${encoded}&text=${encodedTitle}`, label: "Telegram", color: "hover:bg-[#0088cc] hover:text-white" },
  ];

  return (
    <div className="flex items-center gap-2 my-4">
      <span className="text-xs font-semibold text-muted-foreground mr-1">Bagikan:</span>
      {links.map(({ icon: Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share to ${label}`}
          className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-all ${color}`}
        >
          <Icon className="w-3.5 h-3.5" />
        </a>
      ))}
    </div>
  );
};

export default ShareButtons;
