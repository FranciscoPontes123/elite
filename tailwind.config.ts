import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070707",
        "bg-elev": "#0d0d0d",
        fg: "#f4f4f4",
        "fg-dim": "rgba(244,244,244,0.5)",
        accent: "#c8ff2e",
        amber: "#ff6a2e",
      },
      fontFamily: {
        display: ["var(--font-big-shoulders)", "Impact", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(96px,18vw,280px)", { lineHeight: "0.86", letterSpacing: "-0.02em" }],
        "section": ["clamp(72px,11vw,200px)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "card": ["clamp(36px,5vw,72px)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "stat": ["clamp(48px,6vw,88px)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "label": ["11px", { lineHeight: "1.4", letterSpacing: "0.22em" }],
      },
      borderColor: {
        rule: "rgba(244,244,244,0.12)",
      },
      spacing: {
        section: "clamp(64px,10vw,140px)",
        "section-x": "clamp(20px,5vw,72px)",
      },
    },
  },
  plugins: [],
};
export default config;
