import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from "remotion";
import {manrope, prata} from "../fonts";
import {Texture} from "../components/Texture";

export const BrandReveal: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: "#F4F0E8", color: "#16171A", fontFamily: manrope, overflow: "hidden"}}>
      <Texture />
      <Interactive.Div
        name="Top identity"
        style={{
          position: "absolute",
          top: 88,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #16171A",
          paddingTop: 22,
          fontSize: 25,
          fontWeight: 800,
          letterSpacing: "0.1em",
          opacity: interpolate(frame, [0, 14], [0, 1], {extrapolateRight: "clamp"}),
        }}
      >
        <span>BASIT ALI / PORTFOLIO</span>
        <span style={{display: "flex", alignItems: "center", gap: 12}}>
          <i style={{display: "block", width: 14, height: 14, borderRadius: "50%", backgroundColor: "#FF5F4A"}} />
          2026
        </span>
      </Interactive.Div>

      <Interactive.Div
        name="Basit title"
        style={{
          position: "absolute",
          top: 176,
          left: 72,
          zIndex: 4,
          fontSize: 205,
          fontWeight: 800,
          lineHeight: 0.75,
          letterSpacing: "-0.075em",
          opacity: interpolate(frame, [4, 21], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [4, 24], ["0px 70px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        BASIT
      </Interactive.Div>
      <Interactive.Div
        name="Ali title"
        style={{
          position: "absolute",
          top: 350,
          left: 214,
          zIndex: 4,
          fontSize: 230,
          fontWeight: 800,
          lineHeight: 0.78,
          letterSpacing: "-0.08em",
          opacity: interpolate(frame, [9, 27], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [9, 29], ["0px 80px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ALI<span style={{fontFamily: prata, color: "#FF5F4A", fontWeight: 400}}>.</span>
      </Interactive.Div>

      <div
        style={{
          position: "absolute",
          left: 390,
          top: 596,
          width: 610,
          height: 1070,
          borderRadius: "300px 300px 52px 52px",
          backgroundColor: "#6477FF",
          overflow: "hidden",
          boxShadow: "28px 36px 0 rgba(22,23,26,0.09)",
          opacity: interpolate(frame, [15, 33], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [15, 38], ["0px 130px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [15, 42], [0.94, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <Img
          name="Basit character"
          src={staticFile("basit-character.webp")}
          style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 16%"}}
        />
        <div
          style={{
            position: "absolute",
            left: 28,
            right: 28,
            bottom: 24,
            display: "flex",
            justifyContent: "space-between",
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textShadow: "0 3px 12px rgba(0,0,0,0.5)",
          }}
        >
          <span>AI / CODE / DESIGN</span>
          <span>KARACHI · PK</span>
        </div>
      </div>

      <Interactive.Div
        name="Role"
        style={{
          position: "absolute",
          left: 80,
          bottom: 128,
          width: 340,
          fontSize: 44,
          lineHeight: 1.18,
          fontWeight: 700,
          opacity: interpolate(frame, [34, 53], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [34, 56], ["0px 34px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        AI ENGINEER<br />/ FULL-STACK<br />DEVELOPER
      </Interactive.Div>
    </AbsoluteFill>
  );
};
