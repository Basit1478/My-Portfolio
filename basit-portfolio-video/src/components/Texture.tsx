import {AbsoluteFill} from "remotion";

export const Texture: React.FC<{dark?: boolean}> = ({dark = false}) => {
  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity: dark ? 0.11 : 0.08,
        backgroundImage:
          "radial-gradient(circle at 18% 22%, currentColor 0 1px, transparent 1.3px), radial-gradient(circle at 76% 61%, currentColor 0 0.8px, transparent 1.1px)",
        backgroundSize: "17px 19px, 23px 29px",
        color: dark ? "#F4F0E8" : "#16171A",
        mixBlendMode: dark ? "screen" : "multiply",
      }}
    />
  );
};
