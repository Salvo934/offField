import { SOCIAL_CHANNELS } from "../config/social";

export type SocialId = (typeof SOCIAL_CHANNELS)[number]["id"];

export const SOCIAL_ICON_ACCENT: Record<SocialId, string> = {
  instagram: "hover:text-pink-400/90 hover:ring-pink-500/15",
  facebook: "hover:text-blue-400/90 hover:ring-blue-500/20",
  linkedin: "hover:text-sky-400/90 hover:ring-sky-500/20",
  tiktok: "hover:text-fuchsia-300/90 hover:ring-fuchsia-500/15",
};

type Props = { id: SocialId; className?: string };

export function SocialNetworkIcon({ id, className = "h-[15px] w-[15px]" }: Props): JSX.Element {
  switch (id) {
    case "instagram":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.918-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.75-.05-3.45-.85-4.81-2.03 0 5.73 0 11.46 0 17.2-1.31 3.16-4.52 5.21-8.04 5.03-2.98-.14-5.69-2.09-6.97-4.8-.88-1.85-.98-3.97-.28-5.88.72-1.93 2.18-3.56 4.07-4.55 1.89-.99 4.08-1.23 6.12-.72v4.13c-1.23-.41-2.6-.44-3.88-.1-1.28.34-2.39 1.14-3.13 2.22-.74 1.08-.99 2.43-.69 3.7.3 1.27 1.17 2.36 2.36 2.97 1.19.61 2.61.67 3.84.16 1.23-.51 2.18-1.55 2.6-2.82.13-.36.19-.74.19-1.12V0h-3.19z" />
        </svg>
      );
  }
}
